import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from 'react';
import Home from './Components/Pages/Home'
import AbrigoList from './Components/Pages/abrigoList';
import AbrigoForm from './Components/Pages/AbrigoForm';
import AnimalList from './Components/Pages/animalList';
import AnimalForm from './Components/Pages/animalForm';
import AnimalListByAbrigo from './Components/Pages/AnimalListByAbrigo';
import UsuarioList from './Components/Pages/UsuarioList';
import UsuarioForm from './Components/Pages/UsuarioForm';
import LoginForm from './Components/Pages/TelaLogin';
import Menu from './Components/Layout/Menu'
import Rodape from './Components/Layout/Rodape'
import TelaAdm from './Components/Pages/TelaAdm';

function AppRoutes() {
  const location = useLocation();
  const hideMenu = location.pathname === "/login";

  return (
    <>
      {!hideMenu && <Menu />}
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tela-adm" element={<TelaAdm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/abrigos" element={<AbrigoList />} />
          <Route path="/novo-abrigo" element={<AbrigoForm />} />
          <Route path="/animais" element={<AnimalList />} />
          <Route path="/novo-animal" element={<AnimalForm />} />
          <Route path="/animais-por-abrigo" element={<AnimalListByAbrigo />} />
          <Route path="/usuarios" element={<UsuarioList />} />
          <Route path="/novo-usuario" element={<UsuarioForm />} />
      </Routes>
    </>
  );
}

export default AppRoutes;