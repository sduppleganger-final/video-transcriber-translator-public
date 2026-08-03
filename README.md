# Video Transcriber & Translator — public website

Anonymous public website for Video Transcriber & Translator 1.0.12 on Windows and Mac.

- Website: <https://sduppleganger-final.github.io/video-transcriber-translator-public/>
- Windows and Mac release: <https://github.com/sduppleganger-final/video-transcriber-translator-download/releases/tag/v1.0.12>

The page explains local video/audio transcription, subtitle translation, uploaded-SRT attachment, review and styling, captioned output, ordered video splitting, and platform-specific startup requirements. Windows and Mac 1.0.12 keep the private custom dictionary for the current session: users can add preferred terms and exact replacements, while the editor offers an automatic correction only after the same unambiguous one-word edit has been made three times during that session. Declining suppresses that pair for the rest of the session, and uploaded SRT files never train or change the dictionary automatically. Both platforms retain the optional Hebrew-optimized Ivrit.ai engine, bundled Hy-MT and QuickMT translation, DOCX/PDF export, and all prior local features. They also offer an explicit optional Gemini proofreading step using the user's own API key; only the complete current translated SRT is sent to Google, while media remains local. The Mac section provides clear English/Hebrew installation and Apple Gatekeeper instructions for the unsigned/unnotarized 1.0.12 builds.

Run `node scripts/verify-site.mjs` before publication.
