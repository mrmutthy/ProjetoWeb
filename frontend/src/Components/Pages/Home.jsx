import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Layout/Menu';
import '../Styles/Home.css';


function Home() {
    const [animais, setAnimais] = useState([]);
    const [abrigos, setAbrigos] = useState([]);
    const [animalSelecionado, setAnimalSelecionado] = useState(null);
    const navigate = useNavigate();

    const tipoUsuario = localStorage.getItem('tipo');

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:8081/api/animais', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setAnimais(data))
            .catch(err => console.error(err));

        fetch('http://localhost:8081/api/abrigos', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setAbrigos(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="home-center">
            <div className="home-container">
                <>
                    <Menu />
                    <div className="home-header">
                        <h1>Home</h1>
                        {tipoUsuario === "1" && (
                            <button
                                className="btn-direita"
                                onClick={() => navigate('/tela-adm')}
                            >
                                Administração
                            </button>
                        )}
                    </div>
                    <div className="home-container">
                        <section>

                            <h2>Animais</h2>
                            <div className="card-list">
                                {animais.map(animal => (
                                    <div
                                        className="animal-card"
                                        key={animal.id}
                                        onClick={() => setAnimalSelecionado(animal)}
                                    >
                                        {animal.nome}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2>Abrigos</h2>
                            <div className="card-list">
                                {abrigos.map(abrigo => (
                                    <div className="abrigo-card" key={abrigo.id}>
                                        <strong>{abrigo.nome}</strong>
                                        <div>{abrigo.email}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {animalSelecionado && (
                        <div className="animal-modal" onClick={() => setAnimalSelecionado(null)}>
                            <div className="animal-modal-content" onClick={e => e.stopPropagation()}>
                                <h3>{animalSelecionado.nome}</h3>
                                <p><b>Sexo:</b> {animalSelecionado.sexo}</p>
                                <p><b>Data de Nascimento:</b> {animalSelecionado.dataNascimento}</p>
                                <p><b>Abrigo:</b> {animalSelecionado.abrigoId}</p>
                                <p><b>Castrado:</b> {animalSelecionado.castrado ? 'Sim' : 'Não'}</p>
                                <p><b>Doença:</b> {animalSelecionado.doenca || 'Nenhuma'}</p>
                                <p><b>Porte:</b> {animalSelecionado.porte}</p>
                                <p><b>Espécie:</b> {animalSelecionado.especie}</p>
                                <p><b>Raça:</b> {animalSelecionado.raca}</p>
                                <button onClick={() => setAnimalSelecionado(null)}>Fechar</button>
                            </div>
                        </div>
                    )}
                </>
            </div>
        </div>
    );
}

export default Home;