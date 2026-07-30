import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const publicOrigin =
  "https://sduppleganger-final.github.io/video-transcriber-translator-public";
const formerOrigin =
  "https://sduppleganger-final.github.io/video-transcriber-translator-download";
const downloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.6/Video.Transcriber.And.Translator.1.0.6.exe";
const checksum =
  "32C993623D46370B25E3BD0E88ABDAA9FE089C89BE27E99B8603BA8F494230E7";
const macAppleSiliconDownloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.3-mac/Video.Transcriber.And.Translator.1.0.3.mac-arm64.zip";
const macIntelDownloadUrl =
  "https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/download/v1.0.3-mac/Video.Transcriber.And.Translator.1.0.3.mac-x64.zip";
const macAppleSiliconChecksum =
  "D0BDF403B28977B660231668E995CC6F0ECC83C58BB695693892F9DA3BB489F6";
const macIntelChecksum =
  "0B70928740029F007336C20AFE007C1854261A0B1F55DA41E8879219DC8D39CB";

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
assert.ok(html.includes("Transcribe"));
assert.ok(html.includes("Translate"));
assert.ok(html.includes("Split"));
assert.ok(html.includes("Windows 1.0.6"));
assert.ok(html.includes("Hebrew-optimized Ivrit.ai"));
assert.ok(html.includes("separate verified 1.62 GB download"));
assert.ok(html.includes("your media is never uploaded"));
assert.ok(html.includes("DOCX and PDF transcripts"));
assert.ok(html.includes("Mac 1.0.3 does not yet include the Ivrit.ai engine or DOCX/PDF"));
assert.ok(html.includes("video or audio"));
assert.ok(html.includes("WAV, MP3, OGG"));
assert.ok(html.includes("bilingual English/Hebrew screen"));
assert.ok(html.includes("3–5 minutes"));
assert.ok(html.includes("preparation may repeat on later launches"));
assert.ok(html.includes("Download for Mac"));
assert.ok(html.includes("Download Apple Silicon"));
assert.ok(html.includes("Download Intel Mac"));
assert.ok(html.includes("MAC VERSION 1.0.3"));
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
