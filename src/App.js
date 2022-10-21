import "./App.css";
import Home from "./pages/home";
import Skill from "./pages/skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./pages/education";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
