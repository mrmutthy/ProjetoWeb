import React, { useState, useEffect } from 'react';
import '../Styles/AnimalForm.css';

const AnimalForm = () => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [abrigoId, setAbrigoId] = useState('');
    const [castrado, setCastrado] = useState('');
    const [doenca, setDoenca] = useState('');
    const [porte, setPorte] = useState('');
    const [especie, setEspecie] = useState('');
    const [raca, setRaca] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [animais, setAnimais] = useState([]);
    const [abrigos, setAbrigos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        
        fetch('http://localhost:8081/api/animais', {
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
            .catch((err) => console.error(err));

        
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:8081/api/animais', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ nome, sexo, dataNascimento, abrigoId, castrado, doenca, porte, especie, raca })
            });

            if (!response.ok) {
                throw new Error('Erro ao criar animal');
            }

            const data = await response.json();
            setMensagem('Animal cadastrado com sucesso!');
    
            setNome('');
            setSexo('');
            setDataNascimento('');
            setAbrigoId('');
            setCastrado('');
            setDoenca('');
            setPorte('');
            setEspecie('');
            setRaca('');
            setAnimais([...animais, data]);
        } catch (error) {
            console.error('Erro ao criar animal:', error);
            setMensagem('Erro ao cadastrar animal');
        }
    };

    return (
        <div className="animal-form-center">
            <div className="animal-form-container">
                <h1>Cadastrar Novo Animal</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                    </div>
                    <div>
                        <label>Sexo</label>
                        <input type="text" value={sexo} onChange={e => setSexo(e.target.value)} required />
                    </div>
                    <div>
                        <label>Data de Nascimento</label>
                        <input type="text" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} required />
                    </div>
                    <div>
                        <label>Abrigo</label>
                        <select value={abrigoId} onChange={e => setAbrigoId(e.target.value)} required>
                            <option value="">Selecione um abrigo</option>
                            {abrigos.map((abrigo) => (
                                <option key={abrigo.id} value={abrigo.id}>
                                    {abrigo.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Castrado</label>
                        <input type="text" value={castrado} onChange={e => setCastrado(e.target.value)} />
                    </div>
                    <div>
                        <label>Doença</label>
                        <input type="text" value={doenca} onChange={e => setDoenca(e.target.value)} />
                    </div>
                    <div>
                        <label>Porte</label>
                        <input type="text" value={porte} onChange={e => setPorte(e.target.value)} required />
                    </div>
                    <div>
                        <label>Espécie</label>
                        <input type="text" value={especie} onChange={e => setEspecie(e.target.value)} required />
                    </div>
                    <div>
                        <label>Raça</label>
                        <input type="text" value={raca} onChange={e => setRaca(e.target.value)} required />
                    </div>
                    <button type="submit">Criar Animal</button>
                </form>
                {mensagem && <p>{mensagem}</p>}

                <h2>Animais Cadastrados</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sexo</th>
                            <th>Data Nasc.</th>
                            <th>Abrigo</th>
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
                                <td>{animal.abrigoId}</td>
                                <td>{animal.castrado}</td>
                                <td>{animal.doenca}</td>
                                <td>{animal.porte}</td>
                                <td>{animal.especie}</td>
                                <td>{animal.raca}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AnimalForm;