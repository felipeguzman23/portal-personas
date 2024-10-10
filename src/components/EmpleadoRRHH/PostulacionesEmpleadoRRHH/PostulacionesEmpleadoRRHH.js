import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostulacionesEmpleadoRRHH.css';

const PostulacionesEmpleadoRRHH = () => {
    const [beneficios, setBeneficios] = useState([]);
    const [postulado, setPostulado] = useState(false); // Controlar si ya postuló
    const navigate = useNavigate();

    // Simular la obtención de los beneficios desde el Jefe de RRHH
    useEffect(() => {
        // Aquí deberías realizar la llamada a la API para obtener los beneficios desde el servidor
        const beneficiosDisponibles = [
            { id: 1, nombre: 'Seguro de Salud', descripcion: 'Cobertura de salud completa.' },
            { id: 2, nombre: 'Beca de Estudios', descripcion: 'Beca para estudios universitarios.' }
        ];
        setBeneficios(beneficiosDisponibles);
    }, []);

    const handlePostular = (id) => {
        setPostulado(true); // Indicar que ya ha postulado
        alert(`Te has postulado al beneficio con ID: ${id}`);
    };

    return (
        <div className="postulaciones-empleado-container">
            <h2>Beneficios disponibles para postulación</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre del Beneficio</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {beneficios.map((beneficio) => (
                        <tr key={beneficio.id}>
                            <td>{beneficio.nombre}</td>
                            <td>{beneficio.descripcion}</td>
                            <td>
                                <button 
                                    className="btn btn-primary"
                                    disabled={postulado} // Desactivar si ya postuló
                                    onClick={() => handlePostular(beneficio.id)}
                                >
                                    {postulado ? 'Postulado' : 'Postularse'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostulacionesEmpleadoRRHH;
