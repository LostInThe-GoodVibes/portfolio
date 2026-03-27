import { assetUrl } from "../lib/assetUrl";

export default function AssetCursorStyles() {
  const cursorUrl = assetUrl("/assets/cursor-small.png");

  return (
    <style>{`
      html, body {
        cursor: url("${cursorUrl}") 2 14, auto;
      }

      a, button, [role="button"], label, summary {
        cursor: url("${cursorUrl}") 2 14, pointer;
      }

      input, textarea, select, [contenteditable="true"] {
        cursor: text;
      }
    `}</style>
  );
}

