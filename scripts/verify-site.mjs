import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const publicOrigin =
  "https://sduppleganger-final.github.io/video-transcriber-translator-public";
const formerOrigin =
  "https://sduppleganger-final.github.io/video-transcriber-translator-download";
const downloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.8/Video.Transcriber.And.Translator.1.0.8.exe";
const checksum =
  "634E06C3D803A15BDAE54BB2F7732688B1EEBDAFA6573B02F6D1FF45EBAD79F5";
const macAppleSiliconDownloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.8/Video.Transcriber.And.Translator.1.0.8.mac-arm64.zip";
const macIntelDownloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.8/Video.Transcriber.And.Translator.1.0.8.mac-x64.zip";
const macAppleSiliconChecksum =
  "6671910C112F52DC11245D8896E79A77450AD2A28D5AFF138DE9C9566CFDE480";
const macIntelChecksum =
  "84C2E4A2642D8046695F7D0DAA36BFB750619E45005420D74979EB5DEBD64CD7";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const [icon, socialCard] = await Promise.all([
  stat(new URL("../video-transcriber-translator-icon.png", import.meta.url)),
  stat(new URL("../og.png", import.meta.url)),
]);

assert.match(html, /<title>Video Transcriber &amp; Translator<\/title>/i);
assert.ok(html.includes(publicOrigin));
assert.ok(html.includes(`${publicOrigin}/og.png`));
assert.ok(!html.includes(formerOrigin));
assert.ok(html.includes(downloadUrl));
assert.ok(html.includes(checksum));
assert.ok(html.includes(macAppleSiliconDownloadUrl));
assert.ok(html.includes(macIntelDownloadUrl));
assert.ok(html.includes(macAppleSiliconChecksum));
assert.ok(html.includes(macIntelChecksum));
assert.ok(!html.includes("releases/download/v1.0.3-mac"));
assert.ok(!html.includes("MAC VERSION 1.0.3"));
assert.ok(!html.includes("QuickMT remains Windows-only"));
assert.ok(html.includes("Transcribe"));
assert.ok(html.includes("Translate"));
assert.ok(html.includes("Split"));
assert.ok(html.includes("Attach SRT"));
assert.ok(html.includes("existing UTF-8 SRT file"));
assert.ok(html.includes("Windows 1.0.8"));
assert.ok(html.includes("Hebrew-optimized Ivrit.ai"));
assert.ok(html.includes("separate verified 1.62 GB download"));
assert.ok(html.includes("your media is never uploaded"));
assert.ok(html.includes("DOCX and PDF transcripts"));
assert.ok(html.includes("Mac 1.0.8 matches the Windows 1.0.8 feature set"));
assert.ok(/Hy-MT and\s+QuickMT translation/.test(html));
assert.ok(html.includes("גרסת Mac 1.0.8 כוללת את כל יכולות העיבוד"));
assert.ok(html.includes("video or audio"));
assert.ok(html.includes("WAV, MP3, OGG"));
assert.ok(html.includes("bilingual English/Hebrew screen"));
assert.ok(html.includes("3–5 minutes"));
assert.ok(html.includes("preparation may repeat on later launches"));
assert.ok(html.includes("Download for Mac"));
assert.ok(html.includes("Download Apple Silicon"));
assert.ok(html.includes("Download Intel Mac"));
assert.ok(html.includes("MAC VERSION 1.0.8"));
assert.ok(html.includes("NEW IN VERSION 1.0.8"));
assert.ok(html.includes("same unambiguous one-word-to-one-word replacement three times across all sessions"));
assert.ok(html.includes("Declining means the app will never ask about that pair again"));
assert.ok(html.includes("Uploaded SRT files never train or change the dictionary automatically"));
assert.ok(html.includes("אותה החלפה חד-משמעית ממילה אחת למילה"));
assert.ok(html.includes("About This Mac"));
assert.ok(html.includes("Privacy &amp; Security"));
assert.ok(html.includes("Open Anyway"));
assert.ok(html.includes("not signed or notarized by Apple"));
assert.ok(html.includes("אין להשבית את Gatekeeper"));
assert.ok(html.includes("פרטיות ואבטחה"));
assert.ok(html.includes("https://support.apple.com/en-us/102445"));
assert.ok(html.includes("https://support.apple.com/en-us/116943"));
assert.ok(!/xattr|spctl|sudo/.test(html));
assert.ok(html.includes("infringes copyright"));
assert.ok(html.includes("מפר זכויות יוצרים"));
assert.ok(!html.includes("<script"));
assert.ok(icon.size > 100_000);
assert.ok(socialCard.size > 100_000);

console.log("Public site verification passed.");
