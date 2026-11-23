import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { emailClients } from "@hyper-elements/email-clients";
import {
  ElementsError,
  formatDiagnostics,
  outline,
  validate,
  render,
  type Diagnostic,
} from "@hyper-elements/react";
import { renderImage } from "@hyper-elements/react/image";
import { renderPdf } from "@hyper-elements/react/pdf";
import type { ReactElement } from "react";
import LaunchEmail from "../src/templates/launch-email";
import AnnouncementPage from "../src/templates/announcement-page";
import PressKit from "../src/templates/press-kit";
import SocialX from "../src/templates/social-x";
import SocialOpenGraph from "../src/templates/social-og";
import SocialInstagram from "../src/templates/social-instagram";
import { loadFontFiles } from "../src/theme/fonts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "dist");
const checkOnly = process.argv.includes("--check");

type Design = {
  name: string;
  element: ReactElement;
  kind: "email" | "page" | "document" | "canvas";
  file: string;
  canvas?: { width: number; height: number };
};

const designs: Design[] = [
  { name: "Launch email", element: <LaunchEmail />, kind: "email", file: "launch-email.html" },
  { name: "Announcement page", element: <AnnouncementPage />, kind: "page", file: "announcement.html" },
  { name: "Press kit", element: <PressKit />, kind: "document", file: "press-kit.pdf" },
  { name: "X card", element: <SocialX />, kind: "canvas", file: "social-x.png", canvas: { width: 1200, height: 630 } },
  { name: "Open Graph", element: <SocialOpenGraph />, kind: "canvas", file: "social-og.png", canvas: { width: 1200, height: 630 } },
  { name: "Instagram", element: <SocialInstagram />, kind: "canvas", file: "social-instagram.png", canvas: { width: 1080, height: 1080 } },
];

function problems(diagnostics: readonly Diagnostic[]) {
  return diagnostics.filter((item) => item.severity === "error" || item.severity === "warning");
}

async function main() {
  const clients = await emailClients();
  const fonts = await loadFontFiles();
  let failed = false;

  for (const design of designs) {
    const options = design.kind === "email" ? { plugins: [clients] } : undefined;
    const report = validate(design.element, options);
    console.log(`\n===== ${design.name} · validate (${report.valid ? "valid" : "INVALID"}) =====`);
    if (report.diagnostics.length) console.log(formatDiagnostics(report.diagnostics));
    else console.log("No diagnostics.");

    if (!report.valid) {
      failed = true;
      continue;
    }

    const issues = problems(report.diagnostics);
    if (issues.length) failed = true;

    try {
      console.log(`----- ${design.name} · outline -----`);
      console.log(outline(design.element));
    } catch (error) {
      failed = true;
      if (error instanceof ElementsError) console.error(formatDiagnostics(error.diagnostics));
      else throw error;
    }
  }

  if (failed) {
    console.error("\nStopped: fix validate() errors and warnings before rendering.");
    process.exitCode = 1;
    return;
  }

  if (checkOnly) {
    console.log("\nCheck passed.");
    return;
  }

  await mkdir(outDir, { recursive: true });

  for (const design of designs) {
    try {
      if (design.kind === "email" || design.kind === "page") {
        const { html, text, diagnostics } = await render(design.element, design.kind === "email" ? { plugins: [clients] } : undefined);
        await writeFile(join(outDir, design.file), html);
        if (design.kind === "email") await writeFile(join(outDir, "launch-email.txt"), text);
        if (design.kind === "page") await writeFile(join(outDir, "announcement.txt"), text);
        console.log(`\nWrote ${design.file}`);
        if (diagnostics.length) console.log(formatDiagnostics(diagnostics));
      } else if (design.kind === "document") {
        const printed = await render(design.element);
        await writeFile(join(outDir, "press-kit.html"), printed.html);
        const { pdf, diagnostics } = await renderPdf(design.element, { fonts });
        await writeFile(join(outDir, design.file), pdf);
        const pages = Buffer.from(pdf).toString("latin1").match(/\/Type\s*\/Page(?![s])/g)?.length ?? 0;
        console.log(`\nWrote press-kit.html and press-kit.pdf (${pages} page${pages === 1 ? "" : "s"})`);
        if (diagnostics.length) console.log(formatDiagnostics(diagnostics));
        if (pages !== 1) {
          console.error("Press kit must be exactly one page.");
          failed = true;
        }
      } else {
        const { image, width, height, diagnostics } = await renderImage(design.element, { fonts, strict: true });
        await writeFile(join(outDir, design.file), image);
        console.log(`\nWrote ${design.file} (${width}×${height})`);
        if (diagnostics.length) console.log(formatDiagnostics(diagnostics));
        if (design.canvas && (width !== design.canvas.width || height !== design.canvas.height)) {
          console.error(`Expected ${design.canvas.width}×${design.canvas.height}, got ${width}×${height}`);
          failed = true;
        }
      }
    } catch (error) {
      failed = true;
      if (error instanceof ElementsError) {
        console.error(`\n${design.name} failed to render:`);
        console.error(formatDiagnostics(error.diagnostics));
      } else {
        throw error;
      }
    }
  }

  if (failed) process.exitCode = 1;
  else console.log(`\nAll outputs written to ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
