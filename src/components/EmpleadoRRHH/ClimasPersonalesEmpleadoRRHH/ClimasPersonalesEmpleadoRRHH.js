// ClimasPersonalesEmpleadoRRHH.js
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ClimasPersonalesEmpleadoRRHH.css';

const ClimasPersonalesEmpleadoRRHH = () => {
    const [encuestas, setEncuestas] = useState([]);

    // Simulación de API que obtiene las encuestas de clima laboral
    useEffect(() => {
        const fetchEncuestas = async () => {
            const data = [
                { id: 1, nombre: 'Encuesta 2024', estado: 'Completada' },
                { id: 2, nombre: 'Encuesta 2023', estado: 'Pendiente' }
            ];
            setEncuestas(data);
        };

        fetchEncuestas();
    }, []);

    return (
        <div className="encuestas-container">
            <h2>Climas Personales</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Encuesta</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {encuestas.map((encuesta) => (
                        <tr key={encuesta.id}>
                            <td>{encuesta.nombre}</td>
                            <td>{encuesta.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ClimasPersonalesEmpleadoRRHH;
