import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/** Families named in the theme. Files live in /fonts so PDF and image renders stay offline. */
export const headingFont = "Newsreader, Georgia, 'Times New Roman', serif";
export const bodyFont = "Inter, Arial, Helvetica, sans-serif";

const CDN = "https://cdn.jsdelivr.net/fontsource/fonts";

export const fontFaces = [
  { family: "Inter", src: `${CDN}/inter@5.2.8/latin-400-normal.woff`, format: "woff" as const, weight: 400, style: "normal" as const },
  { family: "Inter", src: `${CDN}/inter@5.2.8/latin-500-normal.woff`, format: "woff" as const, weight: 500, style: "normal" as const },
  { family: "Inter", src: `${CDN}/inter@5.2.8/latin-600-normal.woff`, format: "woff" as const, weight: 600, style: "normal" as const },
  { family: "Inter", src: `${CDN}/inter@5.2.8/latin-700-normal.woff`, format: "woff" as const, weight: 700, style: "normal" as const },
  { family: "Newsreader", src: `${CDN}/newsreader@5.2.8/latin-400-normal.woff`, format: "woff" as const, weight: 400, style: "normal" as const },
  { family: "Newsreader", src: `${CDN}/newsreader@5.2.8/latin-500-normal.woff`, format: "woff" as const, weight: 500, style: "normal" as const },
  { family: "Newsreader", src: `${CDN}/newsreader@5.2.8/latin-600-normal.woff`, format: "woff" as const, weight: 600, style: "normal" as const },
];

const FILES: Array<[string, number, string]> = [
  ["Inter", 400, "inter-400.woff"],
  ["Inter", 500, "inter-500.woff"],
  ["Inter", 600, "inter-600.woff"],
  ["Inter", 700, "inter-700.woff"],
  ["Newsreader", 400, "newsreader-400.woff"],
  ["Newsreader", 500, "newsreader-500.woff"],
  ["Newsreader", 600, "newsreader-600.woff"],
];

const fontsDir = join(dirname(fileURLToPath(import.meta.url)), "../../fonts");

/** Font files for renderPdf() and renderImage(). Neither loader fetches a URL. */
export async function loadFontFiles() {
  return Promise.all(
    FILES.map(async ([family, weight, file]) => ({
      family,
      weight,
      style: "normal" as const,
      src: await readFile(join(fontsDir, file)),
    })),
  );
}
