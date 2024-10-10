import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegurarse de que Bootstrap esté disponible
import './JefeRRHH.css';  // Para cualquier estilo adicional

const JefeRRHH = () => {
    const navigate = useNavigate(); // Hook para redireccionar

    return (
        <div className="jefe-dashboard-container">
            <header className="jefe-header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Jefe de RRHH</a>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <button className="nav-link btn" onClick={() => navigate('/postulaciones')}>Postulaciones</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn" onClick={() => navigate('/calendario')}>Calendario de Trabajo</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn" onClick={() => navigate('/capacitaciones')}>Capacitaciones</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn" onClick={() => navigate('/climas')}>Climas personales</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn" onClick={() => navigate('/prestamos')}>Préstamos</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="jefe-main-content mt-5 pt-5"> {/* Ajustes para el margen superior */}
                <div className="info-card">
                    <h2>Bienvenido al tablero del Jefe de RRHH</h2>
                    <p>Selecciona una opción del menú para comenzar.</p>
                </div>
            </main>
        </div>
    );
};

export default JefeRRHH;
