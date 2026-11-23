# Lumen

Designs use Hyper Elements (`@hyper-elements/react`).

Before writing or changing a design, read `node_modules/@hyper-elements/react/GUIDE.md`.

Styles go in `style={{ }}`. Space between blocks is the parent's `gap`. A design has one root: `Email`, `Page`, `Document`, or `Canvas`.

Do not use React Email, MJML, raw HTML email tables, or call `react-pdf` / Satori yourself. PDF and image output go through `renderPdf()` and `renderImage()`.

After a change, run `npm run check` (`validate()` and `outline()` on every design) and fix every error and warning before `npm run render`.
