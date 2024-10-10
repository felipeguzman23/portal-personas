import React, { useState, useEffect } from 'react';
import './PostulacionesRRHH.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar Bootstrap

const PostulacionesRRHH = () => {
    const [postulaciones, setPostulaciones] = useState([]);

    // Simular una llamada a una API para obtener las postulaciones
    useEffect(() => {
        const fetchPostulaciones = async () => {
            const data = [
                { id: 1, empleado: 'EmpleadoRRHH', beneficio: 'Seguro de salud', estado: 'Pendiente', tipoEmpleado: 'EmpleadoRRHH' },
                { id: 2, empleado: 'EmpleadoRRHH', beneficio: 'Beca de estudios', estado: 'Aprobado', tipoEmpleado: 'EmpleadoRRHH' },
                { id: 3, empleado: 'Empleadoclinica', beneficio: 'Vacaciones adicionales', estado: 'Rechazado', tipoEmpleado: 'Empleadoclinica' }
            ];

            // Filtramos solo las postulaciones de 'EmpleadoRRHH' y 'Empleadoclinica'
            const filteredPostulaciones = data.filter(
                (postulacion) => postulacion.tipoEmpleado === 'EmpleadoRRHH' || postulacion.tipoEmpleado === 'Empleadoclinica'
            );

            setPostulaciones(filteredPostulaciones);
        };

        fetchPostulaciones();
    }, []);

    // Función para manejar la acción de aprobar una postulación
    const aprobarPostulacion = (id) => {
        const nuevasPostulaciones = postulaciones.map((postulacion) =>
            postulacion.id === id ? { ...postulacion, estado: 'Aprobado' } : postulacion
        );
        setPostulaciones(nuevasPostulaciones);
    };

    // Función para manejar la acción de rechazar una postulación
    const rechazarPostulacion = (id) => {
        const nuevasPostulaciones = postulaciones.map((postulacion) =>
            postulacion.id === id ? { ...postulacion, estado: 'Rechazado' } : postulacion
        );
        setPostulaciones(nuevasPostulaciones);
    };

    return (
        <div className="container postulaciones-container mt-4">
            <h1 className="text-center mb-4">Gestión de Postulaciones a Beneficios</h1>
            <div className="table-responsive">
                <table className="table table-striped table-hover postulaciones-table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Empleado</th>
                            <th>Beneficio</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postulaciones.map((postulacion) => (
                            <tr key={postulacion.id}>
                                <td>{postulacion.empleado}</td>
                                <td>{postulacion.beneficio}</td>
                                <td>
                                    <span className={`badge ${postulacion.estado === 'Aprobado' ? 'bg-success' : postulacion.estado === 'Rechazado' ? 'bg-danger' : 'bg-warning'}`}>
                                        {postulacion.estado}
                                    </span>
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-success btn-sm me-2" 
                                        onClick={() => aprobarPostulacion(postulacion.id)}
                                        disabled={postulacion.estado === 'Aprobado'}
                                    >
                                        Aprobar
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => rechazarPostulacion(postulacion.id)}
                                        disabled={postulacion.estado === 'Rechazado'}
                                    >
                                        Rechazar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostulacionesRRHH;
