import { useEffect } from "react";
import Canvas from "../components/Canvas";

function Draw() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${previousTitle} | Draw`;

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section className="page-card">
      <Canvas />
    </section>
  );
}

export default Draw;
