import "./App.css";
import Home from "./pages/home";
import Skill from "./pages/skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
