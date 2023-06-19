import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

function ProtectedRoutes({ redirectTo }) {
  const isAutheticated = true;
  return isAutheticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function Main() {
  return (
    <div className="container-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default Main;
