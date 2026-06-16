import { Editor, Tldraw, toRichText } from "tldraw";
import "tldraw/tldraw.css";

export default function Canvas() {
  const handleMount = (editor: Editor) => {};

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw onMount={handleMount} />
    </div>
  );
}
