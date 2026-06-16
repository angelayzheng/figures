import { useEffect } from "react";

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
      <h1>Draw</h1>
    </section>
  );
}

export default Draw;
