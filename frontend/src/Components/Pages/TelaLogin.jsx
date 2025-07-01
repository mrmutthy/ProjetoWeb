import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/TelaLogin.css';

const TelaLogin = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('http://localhost:8081/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, senha }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Falha no login');
            }
            const data = await response.json();
            const { token, nome, email, tipo } = data;
            localStorage.setItem('token', token);
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('tipo', tipo);
            navigate('/Home')
            console.log('Login bem-sucedido:', data);
            console.log('Token:', tipo);
        } catch (err) {
            setError(err.message || 'Falha no login. Verifique suas credenciais.');
            console.error(err);
        }
    };

    return (
        <div className="login-center">
            <div className="login-container">
                <h2>Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Login:</label>
                        <input
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default TelaLogin;
