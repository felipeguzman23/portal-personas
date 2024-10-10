// CapacitacionesEmpleadoRRHH.js
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './CapacitacionesEmpleadoRRHH.css';

const CapacitacionesEmpleadoRRHH = () => {
    const [capacitaciones, setCapacitaciones] = useState([]);

    // Simulación de API que obtiene las capacitaciones completadas
    useEffect(() => {
        const fetchCapacitaciones = async () => {
            const data = [
                { id: 1, nombre: 'Capacitación en Primeros Auxilios', estado: 'Completada' },
                { id: 2, nombre: 'Capacitación en Liderazgo', estado: 'Pendiente' }
            ];
            setCapacitaciones(data);
        };

        fetchCapacitaciones();
    }, []);

    return (
        <div className="capacitaciones-container">
            <h2>Capacitaciones Realizadas</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {capacitaciones.map((capacitacion) => (
                        <tr key={capacitacion.id}>
                            <td>{capacitacion.nombre}</td>
                            <td>{capacitacion.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CapacitacionesEmpleadoRRHH;
