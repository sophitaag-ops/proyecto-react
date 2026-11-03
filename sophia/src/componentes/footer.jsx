function Footer() {
  return (
    <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", marginTop: "40px", borderTop: "2px solid #eee" }}>
      <p style={{ margin: 0 }}>Proyecto creado por Ana Sophia Velasquez</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>Button</button>
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>Button</button>
      </div>
    </footer>
  );
}
export default Footer;