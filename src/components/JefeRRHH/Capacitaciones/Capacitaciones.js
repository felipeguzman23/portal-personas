import React, { useState, useEffect } from 'react';
import './Capacitaciones.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de que Bootstrap está disponible

const CapacitacionesRRHH = () => {
    const [capacitaciones, setCapacitaciones] = useState([]);
    const [nuevaCapacitacion, setNuevaCapacitacion] = useState('');

    // Simular una llamada a una API para obtener las capacitaciones
    useEffect(() => {
        const fetchCapacitaciones = async () => {
            const data = [
                { id: 1, nombre: 'Capacitación en Seguridad', estado: 'Pendiente' },
                { id: 2, nombre: 'Capacitación en Primeros Auxilios', estado: 'Completada' }
            ];
            setCapacitaciones(data);
        };

        fetchCapacitaciones();
    }, []);

    // Función para manejar la creación de una nueva capacitación
    const agregarCapacitacion = () => {
        if (nuevaCapacitacion.trim()) {
            const nueva = {
                id: capacitaciones.length + 1,
                nombre: nuevaCapacitacion,
                estado: 'Pendiente'
            };
            setCapacitaciones([...capacitaciones, nueva]);
            setNuevaCapacitacion(''); // Limpiar el campo de texto
        }
    };

    // Función para completar una capacitación
    const completarCapacitacion = (id) => {
        const nuevasCapacitaciones = capacitaciones.map((capacitacion) =>
            capacitacion.id === id ? { ...capacitacion, estado: 'Completada' } : capacitacion
        );
        setCapacitaciones(nuevasCapacitaciones);
    };

    return (
        <div className="container capacitaciones-container mt-4">
            <h1 className="text-center mb-4">Gestión de Capacitaciones</h1>
            
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Capacitación</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {capacitaciones.map((capacitacion) => (
                            <tr key={capacitacion.id}>
                                <td>{capacitacion.nombre}</td>
                                <td>
                                    <span className={`badge ${capacitacion.estado === 'Completada' ? 'bg-success' : 'bg-warning'}`}>
                                        {capacitacion.estado}
                                    </span>
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-success btn-sm" 
                                        onClick={() => completarCapacitacion(capacitacion.id)}
                                        disabled={capacitacion.estado === 'Completada'}
                                    >
                                        Marcar como Completada
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Formulario para agregar nueva capacitación */}
            <div className="mt-4">
                <h2>Agregar Nueva Capacitación</h2>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre de la capacitación" 
                        value={nuevaCapacitacion}
                        onChange={(e) => setNuevaCapacitacion(e.target.value)}
                    />
                    <button 
                        className="btn btn-primary" 
                        onClick={agregarCapacitacion}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CapacitacionesRRHH;
