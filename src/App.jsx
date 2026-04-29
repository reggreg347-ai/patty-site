import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Biography from "./pages/Biography";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <p>Site is working</p>
    </div>
  );
}

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

        <Link to="/">Home</Link>
        <Link to="/bio">Biography</Link>
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
