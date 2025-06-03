import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from "./AppHome";
import ExercicePage from "./ExercicePage";
import ProjectPage from "./ProjetPage";
import Login from "./components/Login";
import Create from "./components/Create";
import Dashboard from "./components/dashboard";
import Blog from "./Blog/Blog";
import TestPage from "./components/TestPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/e" element={<Login />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<AppHome />} />
        <Route path="/exercice" element={<ExercicePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Projet" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}
export default App;