import React from "react";

export default function EmailTemplate() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Sig ESB</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>do not forget to star our repository</span>
      </div>

      <footer style={{ marginTop: "5rem", border: "1px solid #cbd5e1" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <a href="https://twitter.com/sigcoding">Twitter</a>
          <a href="https://discord.gg/k7tKxaHZBu">Discord</a>
          <a href="https://instagram.com/sigcoding">Instagram</a>
        </div>
      </footer>
    </>
  );
}
