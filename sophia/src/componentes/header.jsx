function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "2px solid #eee", marginBottom: "20px" }}>
      <h2 style={{ margin: 0 }}>LOGO</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>Button</button>
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>Button</button>
      </div>
    </header>
  );
}
export default Header;