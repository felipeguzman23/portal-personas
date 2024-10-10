import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login attempt with email:", email);  // Para depuración

        // Autenticación simple basada en email y contraseña
        if (email === 'jefe@rrhh.com' && password === 'jefe123') {
            login('JefeRRHH');
            navigate('/jefe-rrhh');
        } else if (email === 'empleado@rrhh.com' && password === 'empleado123') {
            login('EmpleadoRRHH');
            navigate('/empleado-rrhh');
        } else if (email === 'empleado@clinica.com' && password === 'clinica123') {
            login('Empleadoclinica');
            navigate('/empleadoclinica');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Iniciar Sesión</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Ingresa tu correo" 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Ingresa tu contraseña" 
                        />
                    </div>
                    <button type="submit" className="login-btn">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
