import React, { useState, useEffect } from 'react';
import '../Styles/AnimalListByAbrigo.css';

const AnimalListByAbrigo = () => {
    const [abrigos, setAbrigos] = useState([]);
    const [abrigoId, setAbrigoId] = useState('');
    const [animais, setAnimais] = useState([]);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:8081/api/abrigos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Falha ao obter abrigos');
                }
                return resp.json();
            })
            .then((data) => setAbrigos(data))
            .catch((err) => console.error(err));
    }, []);

    const handleAbrigoChange = (e) => {
        const selectedAbrigoId = e.target.value;
        setAbrigoId(selectedAbrigoId);
        const token = localStorage.getItem('token');

        fetch(`http://localhost:8081/api/abrigos/${selectedAbrigoId}/animais`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Falha ao obter animais');
                }
                return resp.json();
            })
            .then((data) => setAnimais(data))
            .catch((err) => {
                console.error(err);
                setMensagem('Erro ao buscar animais');
            });
    };

    return (
        <div className="animal-list-abrigo-center">
            <div className="animal-list-abrigo-container">
                <h1>Pesquisa de Animal por Abrigo</h1>
                <h2>Selecione um Abrigo</h2>
                <div>
                    <label>Abrigo</label>
                    <select value={abrigoId} onChange={handleAbrigoChange} required>
                        <option value="">Selecione um abrigo</option>
                        {abrigos.map((abrigo) => (
                            <option key={abrigo.id} value={abrigo.id}>
                                {abrigo.nome}
                            </option>
                        ))}
                    </select>
                </div>

                {mensagem && <p>{mensagem}</p>}

                <h2>Animais por Abrigo</h2>
                {animais.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sexo</th>
                                <th>Data Nasc.</th>
                                <th>Castrado</th>
                                <th>Doença</th>
                                <th>Porte</th>
                                <th>Espécie</th>
                                <th>Raça</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animais.map((animal) => (
                                <tr key={animal.id}>
                                    <td>{animal.nome}</td>
                                    <td>{animal.sexo}</td>
                                    <td>{animal.dataNascimento}</td>
                                    <td>{animal.castrado}</td>
                                    <td>{animal.doenca}</td>
                                    <td>{animal.porte}</td>
                                    <td>{animal.especie}</td>
                                    <td>{animal.raca}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Nenhum animal encontrado para esse abrigo.</p>
                )}
            </div>
        </div>
    );
};

export default AnimalListByAbrigo;