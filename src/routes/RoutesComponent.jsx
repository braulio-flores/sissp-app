import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "../components/login/LoginComponent";
import BaseIndex from "../components/ui/BaseIndex";

// AQUI PONDREMOS EL PUNTO DE PARTIDA DE LAS RUTAS
const RoutesComponent = () => {
  return (     
      <>
        <BrowserRouter>
        <Routes>
          <Route exact path="/logeo" element={<LoginComponent />}/>
          <Route path="/index" element={<BaseIndex />} />
        </Routes>
      </BrowserRouter>
      </>
  );
};

export default RoutesComponent;
