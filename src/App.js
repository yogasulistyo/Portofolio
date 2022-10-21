import "./App.css";
import Home from "./pages/home";
import Skill from "./pages/skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./pages/education";
import Project from "./pages/project";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
