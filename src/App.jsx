import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Biography from "./pages/Biography";

function Home() {
  return <h1>Home Page Works ✅</h1>;
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
