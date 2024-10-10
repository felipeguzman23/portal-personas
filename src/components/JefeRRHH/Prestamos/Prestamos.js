import React, { useState, useEffect } from 'react';
import './Prestamos.css';
import { Table, Button } from 'react-bootstrap';

const SolicitudesPrestamos = () => {
    const [solicitudes, setSolicitudes] = useState([]);

    // Simulación de datos ficticios de solicitudes de préstamos
    useEffect(() => {
        const fetchSolicitudes = async () => {
            const data = [
                { id: 1, empleado: 'Empleado RRHH', monto: '2,000,000 CLP', estado: 'Pendiente' },
                { id: 2, empleado: 'Empleado Clínica', monto: '1,500,000 CLP', estado: 'Aprobado' },
                { id: 3, empleado: 'Empleado RRHH', monto: '3,000,000 CLP', estado: 'Rechazado' },
            ];
            setSolicitudes(data);
        };

        fetchSolicitudes();
    }, []);

    // Función para aprobar la solicitud
    const aprobarSolicitud = (id) => {
        const nuevasSolicitudes = solicitudes.map((solicitud) =>
            solicitud.id === id ? { ...solicitud, estado: 'Aprobado' } : solicitud
        );
        setSolicitudes(nuevasSolicitudes);
    };

    // Función para rechazar la solicitud
    const rechazarSolicitud = (id) => {
        const nuevasSolicitudes = solicitudes.map((solicitud) =>
            solicitud.id === id ? { ...solicitud, estado: 'Rechazado' } : solicitud
        );
        setSolicitudes(nuevasSolicitudes);
    };

    return (
        <div className="solicitudes-container">
            <h1>Gestión de Solicitudes de Préstamos</h1>
            <Table striped bordered hover responsive className="solicitudes-table">
                <thead>
                    <tr>
                        <th>Empleado</th>
                        <th>Monto Solicitado</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {solicitudes.map((solicitud) => (
                        <tr key={solicitud.id}>
                            <td>{solicitud.empleado}</td>
                            <td>{solicitud.monto}</td>
                            <td>
                                <span className={solicitud.estado === 'Aprobado' ? 'estado-aprobado' : solicitud.estado === 'Rechazado' ? 'estado-rechazado' : 'estado-pendiente'}>
                                    {solicitud.estado}
                                </span>
                            </td>
                            <td>
                                <Button
                                    variant="success"
                                    onClick={() => aprobarSolicitud(solicitud.id)}
                                    disabled={solicitud.estado === 'Aprobado'}
                                    className="action-btn aprobar-btn"
                                >
                                    Aprobar
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => rechazarSolicitud(solicitud.id)}
                                    disabled={solicitud.estado === 'Rechazado'}
                                    className="action-btn rechazar-btn"
                                >
                                    Rechazar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default SolicitudesPrestamos;
