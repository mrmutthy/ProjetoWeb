import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Menu.css';

const Menu = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <>
            <div className="menu-hamburguer" onClick={() => setOpen(true)}>
                &#9776;
            </div>
            <div className={`sidebar ${open ? 'open' : ''}`}>
                <button className="close-btn" onClick={() => setOpen(false)}>×</button>
                <ul>
                    <li onClick={() => { navigate('/home'); setOpen(false); }}>Home</li>
                    <li onClick={() => { navigate('/abrigos'); setOpen(false); }}>Ver Abrigos</li>
                    <li onClick={() => { navigate('/animais'); setOpen(false); }}>Ver Animais</li>
                    <li onClick={() => { navigate('/animais-por-abrigo'); setOpen(false); }}>Ver animais por abrigo</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
            {open && <div className="sidebar-overlay" onClick={() => setOpen(false)}></div>}
        </>
    );
};

export default Menu;