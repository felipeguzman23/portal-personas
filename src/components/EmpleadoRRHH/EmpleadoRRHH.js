import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmpleadoRRHH.css';  // Importar el archivo CSS para los estilos

const EmpleadoRRHH = () => {
    const navigate = useNavigate();  // Hook para la navegación

    return (
        <div className="empleado-dashboard-container">
            <header className="empleado-header">
                <h1>Tablero de mandos - Empleado de RRHH</h1>
                <nav className="empleado-nav">
                    <ul>
                        <li onClick={() => navigate('/empleado-rrhh/postulaciones')}>Postulaciones</li>
                        <li onClick={() => navigate('/empleado-rrhh/calendario')}>Calendario de Trabajo</li>
                        <li onClick={() => navigate('/empleado-rrhh/capacitaciones')}>Capacitaciones</li>
                        <li onClick={() => navigate('/empleado-rrhh/climas')}>Climas de Personal</li>
                        <li onClick={() => navigate('/empleado-rrhh/prestamos')}>Préstamos</li>
                    </ul>
                </nav>
            </header>

            <main className="empleado-main-content">
                <section className="info-card" id="postulaciones">
                    <h2>Postulaciones a Beneficios</h2>
                    <p>Consulta y visualiza las postulaciones de los empleados.</p>
                    <button className="action-btn" onClick={() => navigate('/empleado-rrhh/postulaciones')}>Ver detalles</button>
                </section>

                <section className="info-card" id="calendario">
                    <h2>Calendario de Trabajo</h2>
                    <p>Revisa el calendario y consulta los turnos del personal.</p>
                    <button className="action-btn" onClick={() => navigate('/empleado-rrhh/calendario')}>Consultar Calendario</button>
                </section>

                <section className="info-card" id="capacitaciones">
                    <h2>Capacitaciones Realizadas</h2>
                    <p>Consulta el estado de las capacitaciones completadas.</p>
                    <button className="action-btn" onClick={() => navigate('/empleado-rrhh/capacitaciones')}>Ver Capacitaciones</button>
                </section>

                <section className="info-card" id="climas">
                    <h2>Climas de Personal</h2>
                    <p>Revisa los resultados de las encuestas de clima laboral.</p>
                    <button className="action-btn" onClick={() => navigate('/empleado-rrhh/climas')}>Ver Encuestas</button>
                </section>

                <section className="info-card" id="prestamos">
                    <h2>Solicitudes de Préstamos</h2>
                    <p>Consulta las solicitudes de préstamos de los empleados.</p>
                    <button className="action-btn" onClick={() => navigate('/empleado-rrhh/prestamos')}>Ver Solicitudes</button>
                </section>
            </main>
        </div>
    );
};

export default EmpleadoRRHH;
