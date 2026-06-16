import { Editor, Tldraw, toRichText } from "tldraw";
import "tldraw/tldraw.css";

export default function Canvas() {
  const handleMount = (editor: Editor) => {};

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        licenseKey="tldraw-2026-09-24/WyJkRFlpcThtcyIsWyIqIl0sMTYsIjIwMjYtMDktMjQiXQ.tnKquhMOt9+8N9UY5c0k9P7WVaFm41ryaIFoGmuq0LKYI4KcvVYKouLasay4BEZNGAhkeHs86+aWJssm8/M8fQ"
        onMount={handleMount}
      />
    </div>
  );
}
