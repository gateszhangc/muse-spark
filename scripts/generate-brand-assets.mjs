import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const fontRoot = "/Users/a1-6/.codex/skills/canvas-design/canvas-fonts";
const outputDir = path.join(root, "public", "brand");
const appDir = path.join(root, "app");

mkdirSync(outputDir, { recursive: true });
mkdirSync(appDir, { recursive: true });

function fontData(file) {
  return readFileSync(path.join(fontRoot, file)).toString("base64");
}

const displayFont = fontData("BricolageGrotesque-Bold.ttf");
const sansFont = fontData("InstrumentSans-Regular.ttf");
const monoFont = fontData("IBMPlexMono-Regular.ttf");

const fontStyle = `
  <style>
    @font-face {
      font-family: 'BrandDisplay';
      src: url(data:font/ttf;base64,${displayFont}) format('truetype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'BrandSans';
      src: url(data:font/ttf;base64,${sansFont}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'BrandMono';
      src: url(data:font/ttf;base64,${monoFont}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }
  </style>
`;

const markSvg = `
<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${fontStyle}
    <radialGradient id="halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(365 265) rotate(46.1) scale(601.5)">
      <stop stop-color="#FB6B47" stop-opacity="0.30"/>
      <stop offset="0.42" stop-color="#F4BA4D" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#F4EFE8" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(260)">
      <stop stop-color="#FB6B47" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#FB6B47" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="48" y="48" width="928" height="928" rx="224" fill="#F4EFE8"/>
  <rect x="48" y="48" width="928" height="928" rx="224" fill="url(#halo)"/>
  <circle cx="512" cy="512" r="308" stroke="#19161A" stroke-opacity="0.12" stroke-width="2"/>
  <circle cx="512" cy="512" r="242" stroke="#FB6B47" stroke-opacity="0.26" stroke-width="18"/>
  <circle cx="512" cy="512" r="182" stroke="#194E45" stroke-opacity="0.18" stroke-width="2"/>
  <circle cx="512" cy="512" r="168" fill="#19161A"/>
  <circle cx="512" cy="512" r="260" fill="url(#glow)"/>
  <path d="M512 374L537 463L625 438L563 502L650 548L554 559L566 650L512 576L458 650L470 559L374 548L461 502L399 438L487 463L512 374Z" fill="#F4BA4D"/>
  <circle cx="742" cy="336" r="18" fill="#FB6B47"/>
  <circle cx="320" cy="770" r="12" fill="#194E45"/>
  <circle cx="742" cy="336" r="38" stroke="#19161A" stroke-opacity="0.10" stroke-width="2"/>
  <text x="512" y="874" text-anchor="middle" fill="#19161A" fill-opacity="0.56" font-family="BrandMono, monospace" font-size="46" letter-spacing="10">MUSE SPARK</text>
</svg>
`;

const logoSvg = `
<svg width="1600" height="520" viewBox="0 0 1600 520" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${fontStyle}
    <radialGradient id="paperGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 140) rotate(41.7) scale(510.6 337.1)">
      <stop stop-color="#FB6B47" stop-opacity="0.26"/>
      <stop offset="0.48" stop-color="#F4BA4D" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="520" rx="0" fill="transparent"/>
  <circle cx="222" cy="260" r="142" fill="#F4EFE8"/>
  <circle cx="222" cy="260" r="142" fill="url(#paperGlow)"/>
  <circle cx="222" cy="260" r="104" stroke="#19161A" stroke-opacity="0.12" stroke-width="2"/>
  <circle cx="222" cy="260" r="80" stroke="#FB6B47" stroke-opacity="0.34" stroke-width="10"/>
  <circle cx="222" cy="260" r="58" fill="#19161A"/>
  <path d="M222 208L234 249L276 237L246 267L288 289L242 294L248 337L222 301L196 337L202 294L156 289L198 267L168 237L210 249L222 208Z" fill="#F4BA4D"/>
  <circle cx="318" cy="182" r="10" fill="#FB6B47"/>
  <circle cx="132" cy="354" r="8" fill="#194E45"/>
  <text x="392" y="232" fill="#19161A" font-family="BrandDisplay, sans-serif" font-size="152" letter-spacing="-10">MUSE</text>
  <text x="392" y="358" fill="#FB6B47" font-family="BrandDisplay, sans-serif" font-size="152" letter-spacing="-10">SPARK</text>
  <text x="398" y="425" fill="#19161A" fill-opacity="0.58" font-family="BrandMono, monospace" font-size="30" letter-spacing="9">CREATIVE SIGNAL STUDIO</text>
</svg>
`;

const markSvgPath = path.join(outputDir, "muse-spark-mark.svg");
const logoSvgPath = path.join(outputDir, "muse-spark-logo.svg");
const markPngPath = path.join(outputDir, "muse-spark-mark.png");
const logoPngPath = path.join(outputDir, "muse-spark-logo.png");

writeFileSync(markSvgPath, markSvg.trim());
writeFileSync(logoSvgPath, logoSvg.trim());

execFileSync("magick", [markSvgPath, "-resize", "1024x1024", markPngPath], {
  stdio: "inherit",
});

execFileSync("magick", [logoSvgPath, "-resize", "1400x455", logoPngPath], {
  stdio: "inherit",
});

execFileSync("magick", [markPngPath, "-resize", "512x512", path.join(appDir, "icon.png")], {
  stdio: "inherit",
});

execFileSync("magick", [markPngPath, "-resize", "180x180", path.join(appDir, "apple-icon.png")], {
  stdio: "inherit",
});

execFileSync(
  "magick",
  [markPngPath, "-define", "icon:auto-resize=256,128,64,48,32,16", path.join(appDir, "favicon.ico")],
  { stdio: "inherit" }
);

console.log("Generated Muse Spark brand assets.");
