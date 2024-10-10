// PrestamosEmpleadoRRHH.js
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './PrestamosEmpleadoRRHH.css';

const PrestamosEmpleadoRRHH = () => {
    const [prestamos, setPrestamos] = useState([]);

    // Simulación de API que obtiene las solicitudes de préstamos
    useEffect(() => {
        const fetchPrestamos = async () => {
            const data = [
                { id: 1, monto: 500000, estado: 'Aprobado' },
                { id: 2, monto: 250000, estado: 'Pendiente' }
            ];
            setPrestamos(data);
        };

        fetchPrestamos();
    }, []);

    return (
        <div className="prestamos-container">
            <h2>Solicitudes de Préstamos</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Monto</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {prestamos.map((prestamo) => (
                        <tr key={prestamo.id}>
                            <td>{prestamo.monto}</td>
                            <td>{prestamo.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PrestamosEmpleadoRRHH;
