export default function Page() {
  return (
    <main
      data-testid="second-repository-content"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        width: 1600,
        height: 900,
        color: "#f8fafc",
        background: "#12335b",
        fontFamily: "sans-serif",
      }}
    >
      <p style={{ fontSize: 28, letterSpacing: 4 }}>LIVE TWEAKER CONTENT</p>
      <h1 style={{ fontSize: 88, margin: 0 }}>Second repository</h1>
      <p style={{ fontSize: 32, margin: 0 }}>INF-479 multi-repository proof</p>
    </main>
  )
}
