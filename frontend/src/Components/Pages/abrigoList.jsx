import React, { useState, useEffect } from 'react';

function AbrigoList() {
    const [abrigos, setAbrigos] = useState([]);
    const [editandoAbrigo, setEditandoAbrigo] = useState(null);
    const [nomeAbrigoEditado, setNomeAbrigoEditado] = useState('');
    const [emailAbrigoEditado, setEmailAbrigoEditado] = useState('');

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
        .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        const token = localStorage.getItem('token');

        fetch(`http://localhost:8081/api/abrigos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((resp) => {
            if (!resp.ok) {
                throw new Error('Falha ao excluir abrigo');
            }
            setAbrigos(abrigos.filter((abrigo) => abrigo.id !== id));
        })
        .catch((err) => console.error(err));
    };

    const handleEdit = (id, nome, email) => {
        setEditandoAbrigo(id);
        setNomeAbrigoEditado(nome);
        setEmailAbrigoEditado(email);
    };

    const cancelarEdicao = () => {
        setEditandoAbrigo(null);
        setNomeAbrigoEditado('');
        setEmailAbrigoEditado('');
    };

    const salvarEdicao = (id) => {
        const token = localStorage.getItem('token');

        fetch(`http://localhost:8081/api/abrigos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ nome: nomeAbrigoEditado, email: emailAbrigoEditado })
        })
        .then((resp) => {
            if (!resp.ok) {
                throw new Error('Falha ao editar abrigo');
            }
            // Atualiza a lista localmente após edição
            setAbrigos(abrigos.map(abrigo =>
                abrigo.id === id ? { ...abrigo, nome: nomeAbrigoEditado, email: emailAbrigoEditado } : abrigo
            ));
            setEditandoAbrigo(null);
        })
        .catch((err) => console.error(err));
    };

    return (
        <>
            <h1>Listar Abrigos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {abrigos.map((abrigo) => (
                        <tr key={abrigo.id}>
                            <td>
                                {editandoAbrigo === abrigo.id ? (
                                    <input
                                        type="text"
                                        value={nomeAbrigoEditado}
                                        onChange={(e) => setNomeAbrigoEditado(e.target.value)}
                                    />
                                ) : (
                                    abrigo.nome
                                )}
                            </td>
                            <td>
                                {editandoAbrigo === abrigo.id ? (
                                    <input
                                        type="email"
                                        value={emailAbrigoEditado}
                                        onChange={(e) => setEmailAbrigoEditado(e.target.value)}
                                    />
                                ) : (
                                    abrigo.email
                                )}
                            </td>
                            <td>
                                {editandoAbrigo === abrigo.id ? (
                                    <>
                                        <button onClick={() => salvarEdicao(abrigo.id)}>Salvar</button>
                                        <button onClick={cancelarEdicao}>Cancelar</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(abrigo.id, abrigo.nome, abrigo.email)}>Editar</button>
                                        <button onClick={() => handleDelete(abrigo.id)}>Excluir</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AbrigoList;