// Componente para dibujar las cajas estilo wireframe con la X
function WireframeBox({ height }) {
  return (
    <div style={{
      border: "2px solid black",
      position: "relative",
      width: "100%",
      height: height,
      backgroundColor: "white",
      boxSizing: "border-box"
    }}>
      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="2" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
}

function Presentacion() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Ana Sophia Velasquez</h2>
      
      {/* Primera caja grande (Página 1 del wireframe) */}
      <WireframeBox height="250px" />

      {/* Fila de abajo con cajas adicionales */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}><WireframeBox height="140px" /></div>
        <div style={{ flex: 1 }}><WireframeBox height="140px" /></div>
      </div>
    </main>
  );
}
export default Presentacion;