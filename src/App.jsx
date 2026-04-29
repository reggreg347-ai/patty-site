function Layout({ children }) {
  return (
    <div>
      <div style={{
        padding: "12px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        gap: "15px"
      }}>
        <strong>My Site</strong>

        <a href="/" style={{ marginLeft: "20px" }}>Home</a>
        <a href="/bio">Biography</a>
      </div>

      <div>{children}</div>
    </div>
  );
}
