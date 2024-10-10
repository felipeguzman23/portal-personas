// VerCalendarioEmpleadoRRHH.js
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './VerCalendarioEmpleadoRRHH.css';

const VerCalendarioEmpleadoRRHH = () => {
    const [calendario, setCalendario] = useState([]);

    // Simulación de API que obtiene los turnos del empleado
    useEffect(() => {
        const fetchCalendario = async () => {
            const data = [
                { fecha: '2024-10-01', turno: 'Mañana' },
                { fecha: '2024-10-02', turno: 'Noche' },
                { fecha: '2024-10-03', turno: 'Libre' }
            ];
            setCalendario(data);
        };

        fetchCalendario();
    }, []);

    return (
        <div className="calendario-container">
            <h2>Calendario de Trabajo</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Turno</th>
                    </tr>
                </thead>
                <tbody>
                    {calendario.map((turno, index) => (
                        <tr key={index}>
                            <td>{turno.fecha}</td>
                            <td>{turno.turno}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default VerCalendarioEmpleadoRRHH;
