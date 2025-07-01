import React, { useState } from 'react';
import '../Styles/AbrigoForm.css';

const AbrigoForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Obter token do localStorage

        try {
            const response = await fetch('http://localhost:8081/api/abrigos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Adicionar token aos cabeçalhos
                },
                body: JSON.stringify({ nome, email })
            });

            if (!response.ok) {
                throw new Error('Erro ao criar abrigo');
            }

            const data = await response.json();
            console.log('Abrigo criado:', data);
            setMensagem('Abrigo cadastrado com sucesso!');
            setNome('');
            setEmail('');
        } catch (error) {
            console.error('Erro ao criar abrigo:', error);
            setMensagem('Erro ao cadastrar abrigo');
        }
    };

    return (
        <div className="abrigo-form-center">
            <div className="abrigo-form-container">
                <h1>Cadastrar Novo Abrigo</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button type="submit">Criar Abrigo</button>
                </form>
                {mensagem && <p>{mensagem}</p>}
            </div>
        </div>
    );
};

export default AbrigoForm;