import React, { useState, useEffect } from 'react';
import '../Styles/animalList.css';

function AnimalList() {
    const [animais, setAnimais] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [abrigos, setAbrigos] = useState([]);
    const [currentAnimal, setCurrentAnimal] = useState({
        id: '',
        nome: '',
        sexo: '',
        dataNascimento: '',
        abrigoId: '',
        castrado: '',
        doenca: '',
        porte: '',
        especie: '',
        raca: ''
    });
    const tipoUsuario = localStorage.getItem('tipo');

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
            .catch((err) => console.log(err));

        // Buscar abrigos
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

        fetch(`http://localhost:8081/api/animais/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Falha ao excluir animal');
                }
                setAnimais(animais.filter((animal) => animal.id !== id));
            })
            .catch((err) => console.error(err));
    };

    const handleEditClick = (animal) => {
        setCurrentAnimal(animal);
        setIsEditMode(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setCurrentAnimal((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        fetch(`http://localhost:8081/api/animais/${currentAnimal.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(currentAnimal)
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Falha ao editar animal');
                }
                return resp.json();
            })
            .then((data) => {
                setAnimais(animais.map((animal) => (animal.id === data.id ? data : animal)));
                setIsEditMode(false);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="animal-list-center">
            <div className="animal-list-container">
                <>
                    <h1>Ver Todos os Animais</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sexo</th>
                                <th>Data Nasc.</th>
                                <th>Abrigo ID</th>
                                <th>Castrado</th>
                                <th>Doença</th>
                                <th>Porte</th>
                                <th>Espécie</th>
                                <th>Raça</th>
                                <th>{tipoUsuario === "1" && ("Ações")}</th>
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
                                    <td>
                                        {tipoUsuario === "1" && (
                                            <>
                                                <button onClick={() => handleEditClick(animal)}>Editar</button>
                                                <button className="btn-excluir" onClick={() => handleDelete(animal.id)}>Excluir</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {isEditMode && (
                        <div className="modal">
                            <form onSubmit={handleEditSubmit}>
                                <div>
                                    <label>Nome</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        value={currentAnimal.nome}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Sexo</label>
                                    <input
                                        type="text"
                                        name="sexo"
                                        value={currentAnimal.sexo}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Data Nascimento</label>
                                    <input
                                        type="text"
                                        name="dataNascimento"
                                        value={currentAnimal.dataNascimento}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Abrigo</label>
                                    <select
                                        name="abrigoId"
                                        value={currentAnimal.abrigoId}
                                        onChange={handleEditChange}
                                        required
                                    >
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
                                    <input
                                        type="text"
                                        name="castrado"
                                        value={currentAnimal.castrado}
                                        onChange={handleEditChange}
                                    />
                                </div>
                                <div>
                                    <label>Doença</label>
                                    <input
                                        type="text"
                                        name="doenca"
                                        value={currentAnimal.doenca}
                                        onChange={handleEditChange}
                                    />
                                </div>
                                <div>
                                    <label>Porte</label>
                                    <input
                                        type="text"
                                        name="porte"
                                        value={currentAnimal.porte}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Espécie</label>
                                    <input
                                        type="text"
                                        name="especie"
                                        value={currentAnimal.especie}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Raça</label>
                                    <input
                                        type="text"
                                        name="raca"
                                        value={currentAnimal.raca}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <button type="submit">Salvar</button>
                                <button type="button" onClick={() => setIsEditMode(false)}>Cancelar</button>
                            </form>
                        </div>
                    )}
                </>
            </div>
        </div>

    );
}

export default AnimalList;