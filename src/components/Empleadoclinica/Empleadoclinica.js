import React from 'react';
import './Empleadoclinica.css';  // Importar el archivo CSS para los estilos

const Empleadoclinica = () => {
    return (
        <div className="clinica-dashboard-container">
            <header className="clinica-header">
                <h1>Dashboard - Empleado de Clínica</h1>
                <nav className="clinica-nav">
                    <ul>
                        <li><a href="#turnos">Turnos de Trabajo</a></li>
                        <li><a href="#beneficios">Beneficios</a></li>
                        <li><a href="#capacitaciones">Capacitaciones</a></li>
                        <li><a href="#prestamos">Préstamos</a></li>
                        <li><a href="#datos-personales">Datos Personales</a></li>
                    </ul>
                </nav>
            </header>

            <main className="clinica-main-content">
                <section className="info-card" id="turnos">
                    <h2>Turnos de Trabajo</h2>
                    <p>Consulta y visualiza tus turnos de trabajo.</p>
                    <button className="action-btn">Ver Turnos</button>
                </section>

                <section className="info-card" id="beneficios">
                    <h2>Beneficios</h2>
                    <p>Revisa los beneficios disponibles para ti.</p>
                    <button className="action-btn">Ver Beneficios</button>
                </section>

                <section className="info-card" id="capacitaciones">
                    <h2>Capacitaciones</h2>
                    <p>Consulta las capacitaciones que tienes disponibles.</p>
                    <button className="action-btn">Ver Capacitaciones</button>
                </section>

                <section className="info-card" id="prestamos">
                    <h2>Solicitudes de Préstamos</h2>
                    <p>Realiza y consulta tus solicitudes de préstamos.</p>
                    <button className="action-btn">Ver Solicitudes</button>
                </section>

                <section className="info-card" id="datos-personales">
                    <h2>Datos Personales</h2>
                    <p>Actualiza o consulta tu información personal.</p>
                    <button className="action-btn">Ver Datos</button>
                </section>
            </main>
        </div>
    );
};

export default Empleadoclinica;
