import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import './ClimasPersonales.css';

const ClimasPersonales = () => {
    const [encuestas, setEncuestas] = useState([]);

    // Simulación de datos de encuestas
    useEffect(() => {
        const fetchEncuestas = async () => {
            const data = [
                { id: 1, empleado: 'Juan Pérez', area: 'RRHH', estado: 'Pendiente' },
                { id: 2, empleado: 'María López', area: 'Clínica', estado: 'Revisado' },
                { id: 3, empleado: 'Carlos Ramírez', area: 'Clínica', estado: 'Pendiente' },
            ];
            setEncuestas(data);
        };
        fetchEncuestas();
    }, []);

    // Función para marcar encuesta como revisada
    const marcarRevisada = (id) => {
        const nuevasEncuestas = encuestas.map((encuesta) =>
            encuesta.id === id ? { ...encuesta, estado: 'Revisado' } : encuesta
        );
        setEncuestas(nuevasEncuestas);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Evaluación de Climas Laborales</h1>
            <Table striped bordered hover className="mt-4">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Empleado</th>
                        <th>Área</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {encuestas.map((encuesta) => (
                        <tr key={encuesta.id}>
                            <td>{encuesta.empleado}</td>
                            <td>{encuesta.area}</td>
                            <td>
                                <span className={`badge ${encuesta.estado === 'Pendiente' ? 'bg-warning' : 'bg-success'}`}>
                                    {encuesta.estado}
                                </span>
                            </td>
                            <td>
                                <Button
                                    variant="primary"
                                    className="me-2"
                                    onClick={() => marcarRevisada(encuesta.id)}
                                    disabled={encuesta.estado === 'Revisado'}
                                >
                                    Marcar como Revisada
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ClimasPersonales;
