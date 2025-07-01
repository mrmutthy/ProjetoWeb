import React, { useState } from 'react';
import AnimalList from './animalList';
import AnimalForm from './animalForm';
import AbrigoList from './abrigoList';
import AbrigoForm from './AbrigoForm';
import UsuarioList from './UsuarioList';
import UsuarioForm from './UsuarioForm';
import Menu from '../Layout/Menu';
import '../Styles/TelaAdm.css';

const TelaAdm = () => {
    const [aba, setAba] = useState('verAnimais');

    const renderConteudo = () => {
        switch (aba) {
            case 'verAnimais':
                return <AnimalList />;
            case 'cadastrarAnimal':
                return <AnimalForm />;
            case 'verAbrigos':
                return <AbrigoList />;
            case 'cadastrarAbrigo':
                return <AbrigoForm />;
            case 'verUsuarios':
                return <UsuarioList />;
            case 'cadastrarUsuario':
                return <UsuarioForm />;
            default:
                return null;
        }
    };

    return (
        <div className="tela-adm-center">
            <Menu />
            <h1 className="tela-adm-title">Tela de Administração</h1>
            <div className="tela-adm-btns">
                <button
                    onClick={() => setAba('verAnimais')}
                    style={{ fontWeight: aba === 'verAnimais' ? 'bold' : 'normal' }}
                >
                    Ver Animais
                </button>
                <button
                    onClick={() => setAba('cadastrarAnimal')}
                    style={{ fontWeight: aba === 'cadastrarAnimal' ? 'bold' : 'normal' }}
                >
                    Cadastrar Novo Animal
                </button>
                <button
                    onClick={() => setAba('verAbrigos')}
                    style={{ fontWeight: aba === 'verAbrigos' ? 'bold' : 'normal' }}
                >
                    Ver Abrigos
                </button>
                <button
                    onClick={() => setAba('cadastrarAbrigo')}
                    style={{ fontWeight: aba === 'cadastrarAbrigo' ? 'bold' : 'normal' }}
                >
                    Cadastrar Novo Abrigo
                </button>
                <button
                    onClick={() => setAba('verUsuarios')}
                    style={{ fontWeight: aba === 'verUsuarios' ? 'bold' : 'normal' }}
                >
                    Ver Usuários
                </button>
                <button
                    onClick={() => setAba('cadastrarUsuario')}
                    style={{ fontWeight: aba === 'cadastrarUsuario' ? 'bold' : 'normal' }}
                >
                    Adicionar Usuário
                </button>
            </div>
            <div className="tela-adm-content">
                {renderConteudo()}
            </div>
        </div>
    );
};

export default TelaAdm;