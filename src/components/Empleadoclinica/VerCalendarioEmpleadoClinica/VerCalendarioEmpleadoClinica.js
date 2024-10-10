import React from 'react';
import './VerCalendarioEmpleadoClinica.css';

const VerCalendarioEmpleadoClinica = ({ shifts }) => {
    return (
        <div className="calendario-container">
            <h1>Calendario de Empleado Clínica</h1>
            <table className="shift-table">
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Turno Mañana</th>
                        <th>Turno Noche</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map((shift) => (
                        <tr key={shift.day}>
                            <td>{shift.day}</td>
                            <td className={shift.morning === 'Disponible' ? 'available' : 'occupied'}>
                                {shift.morning}
                            </td>
                            <td className={shift.night === 'Disponible' ? 'available' : 'occupied'}>
                                {shift.night}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VerCalendarioEmpleadoClinica;
