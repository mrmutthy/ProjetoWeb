import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    {/* Abrigo */}
                    <li className="nav-item">
                        <Link to="/abrigos" className="nav-link">Abrigo Listar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/novo-abrigo" className="nav-link">Abrigo Cadastrar</Link>
                    </li>
                    {/* Animal */}
                    <li className="nav-item">
                        <Link to="/animais" className="nav-link">Animal Listar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/novo-animal" className="nav-link">Animal Cadastrar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/animais-por-abrigo" className="nav-link">Animais por Abrigo</Link>
                    </li>
                    {/* Usuario */}
                    <li className="nav-item">
                        <Link to="/usuarios" className="nav-link">Usuario Listar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/novo-usuario" className="nav-link">Usuario Cadastrar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;