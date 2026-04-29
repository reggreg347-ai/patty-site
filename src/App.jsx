import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Biography from "./pages/Biography";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home</h1>
      <p>Site is running</p>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
        <strong>My Site</strong>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Biography />} />
        </Routes>
      </Layout>
    </Router>
  );
}
