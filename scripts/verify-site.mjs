import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const publicOrigin =
  "https://sduppleganger-final.github.io/video-transcriber-translator-public";
const formerOrigin =
  "https://sduppleganger-final.github.io/video-transcriber-translator-download";
const downloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.13/Video.Transcriber.And.Translator.Setup.1.0.13.exe";
const checksum =
  "A365C77F0960D17E82E24890924924E169DBECD7FA0F2CE9BC44E7D800A89780";
const macAppleSiliconDownloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.13/Video.Transcriber.And.Translator.1.0.13.mac-arm64.zip";
const macIntelDownloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.13/Video.Transcriber.And.Translator.1.0.13.mac-x64.zip";
const macAppleSiliconChecksum =
  "35D3985503C3E4B39DBB6FFDE01339EC0A82CFA098233A09765C154765E3AB50";
const macIntelChecksum =
  "ABA549E0CB87C06AFE0838B1F82492220E74CA2D3F6C69F6847CE4822FE2256D";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const [icon, socialCard] = await Promise.all([
  stat(new URL("../video-transcriber-translator-icon.png", import.meta.url)),
  stat(new URL("../og-1.0.13.png", import.meta.url)),
]);

assert.match(html, /<title>Video Transcriber &amp; Translator<\/title>/i);
assert.ok(html.includes(publicOrigin));
assert.ok(html.includes(`${publicOrigin}/og-1.0.13.png`));
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
assert.ok(html.includes("Windows 1.0.13"));
assert.ok(html.includes("1.83 GiB"));
assert.ok(html.includes("Hebrew-optimized Ivrit.ai"));
assert.ok(html.includes("separate verified 1.62 GB per-session download"));
assert.ok(html.includes("local transcription never uploads your media"));
assert.ok(html.includes("DOCX and PDF transcripts"));
assert.ok(html.includes("Mac 1.0.13 matches the Windows 1.0.13 processing feature set"));
assert.ok(/Hy-MT and\s+QuickMT translation/.test(html));
assert.ok(html.includes("גרסת Mac 1.0.13 כוללת את כל יכולות העיבוד"));
assert.ok(html.includes("video or audio"));
assert.ok(html.includes("WAV, MP3, OGG"));
assert.ok(html.includes("bilingual installer"));
assert.ok(html.includes("3–5 minutes"));
assert.ok(html.includes("Remove it through Windows Settings"));
assert.ok(html.includes("Download for Mac"));
assert.ok(html.includes("Download Apple Silicon"));
assert.ok(html.includes("Download Intel Mac"));
assert.ok(html.includes("MAC VERSION 1.0.13"));
assert.ok(html.includes("choose where completed files are saved"));
assert.ok(html.includes("Choose the output folder"));
assert.ok(html.includes("Save a portable editing draft"));
assert.ok(html.includes(".vttdraft"));
assert.ok(html.includes("Review or save a draft"));
assert.ok(html.includes("selected output folder"));
assert.ok(html.includes("NEW IN VERSION 1.0.8"));
assert.ok(/same unambiguous one-word-to-one-word replacement\s+three times during the current session/i.test(html));
assert.ok(/Declining suppresses that pair for the rest\s+of the session/i.test(html));
assert.ok(html.includes("Uploaded SRT files never train or change the dictionary automatically"));
assert.ok(html.includes("NEW IN VERSION 1.0.12"));
assert.ok(/Gemini 3\.6\s+Flash/.test(html));
assert.ok(html.includes("You provide your own Gemini API key"));
assert.ok(html.includes("Only the complete current translated SRT is sent to Google"));
assert.ok(html.includes("Video and audio are never sent"));
assert.ok(html.includes("Forget saved API key"));
assert.ok(/Google.*quota or incur charges/is.test(html));
assert.ok(html.includes("Deleted on close"));
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
