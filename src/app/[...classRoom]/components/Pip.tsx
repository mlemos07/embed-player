const Pip = () => {
  return [...Array(5)].map((_, index: number) => (
    <div
      key={`pip-${index}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Section 1 */}
      <section style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 1</h3>
          <p>Informação útil sobre o primeiro tópico.</p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 2</h3>
          <p>Informação útil sobre o segundo tópico.</p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 3</h3>
          <p>Informação útil sobre o terceiro tópico.</p>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 4</h3>
          <p>Informação útil sobre o quarto tópico.</p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 5</h3>
          <p>Informação útil sobre o quinto tópico.</p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 6</h3>
          <p>Informação útil sobre o sexto tópico.</p>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 7</h3>
          <p>Informação útil sobre o sétimo tópico.</p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 8</h3>
          <p>Informação útil sobre o oitavo tópico.</p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Card 9</h3>
          <p>Informação útil sobre o nono tópico.</p>
        </div>
      </section>
    </div>
  ));
};

export default Pip;
