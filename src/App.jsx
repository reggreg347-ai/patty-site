import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Biography from "./pages/Biography";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <p>Site is working</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Biography />} />
      </Routes>
    </Router>
  );
}
