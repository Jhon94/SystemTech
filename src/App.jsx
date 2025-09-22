import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from './components/Home';
import { Catalogo } from './components/catalogoServicios/Catalogo';
import { Login } from "./components/Login";
import { PanelAdministrador } from "./components/panelAdministrador/PanelAdministrador";
import { GestorAdministrador } from "./components/panelAdministrador/GestorAdministrador";

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panelAdministrador" element={<PanelAdministrador/>} />
        <Route path="/productos" element={<GestorAdministrador/>}/>
      </Routes>
    </Router>
  );
}

export default App;
