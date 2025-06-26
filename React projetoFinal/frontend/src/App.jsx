import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './Components/Pages/Home'
import AbrigoList from './Components/Pages/abrigoList';
import AbrigoForm from './Components/Pages/AbrigoForm';
import AnimalList from './Components/Pages/animalList';
import AnimalForm from './Components/Pages/animalForm';
import AnimalListByAbrigo from './Components/Pages/AnimalListByAbrigo';
import CategoriaList from './Components/Pages/CategoriaList';
import ReceitaList from './Components/Pages/ReceitaList';
import UsuarioList from './Components/Pages/UsuarioList';
import CategoriaForm from './Components/Pages/CategoriaForm';
import ReceitaForm from './Components/Pages/ReceitaForm';
import ReceitaListByCategoria from './Components/Pages/ReceitaListByCategoria';
import UsuarioForm from './Components/Pages/UsuarioForm';
import LoginForm from './Components/Pages/LoginForm';
import Menu from './Components/Layout/Menu'
import Rodape from './Components/Layout/Rodape'

function App() {
  return (
    <>
    <Router>
      <Menu />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/abrigos" element={<AbrigoList />} />
          <Route path="/novo-abrigo" element={<AbrigoForm />} />
          <Route path="/animais" element={<AnimalList />} />
          <Route path="/novo-animal" element={<AnimalForm />} />
          <Route path="/animais-por-abrigo" element={<AnimalListByAbrigo />} />
          <Route path="/categorias" element={<CategoriaList />} />
          <Route path="/nova-categoria" element={<CategoriaForm />} />
          <Route path="/receitas" element={<ReceitaList />} />
          <Route path="/receitas-categoria" element={<ReceitaListByCategoria />} />
          <Route path="/nova-receita" element={<ReceitaForm />} />
          <Route path="/usuarios" element={<UsuarioList />} />
          <Route path="/novo-usuario" element={<UsuarioForm />} />
      </Routes>
      <Rodape />
    </Router>
    </>
  );
}

export default App;
