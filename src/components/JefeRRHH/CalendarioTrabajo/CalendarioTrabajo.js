import React, { useState } from 'react';
import './CalendarioTrabajo.css';

// Los dos empleados que vamos a gestionar
const employees = ['Empleado RRHH', 'Empleado Clínica'];

const initialShifts = {
    'Empleado RRHH': [
        { day: 'Lunes', morning: 'Disponible', night: 'Disponible' },
        { day: 'Martes', morning: 'Disponible', night: 'Disponible' },
        { day: 'Miércoles', morning: 'Disponible', night: 'Disponible' },
        { day: 'Jueves', morning: 'Disponible', night: 'Disponible' },
        { day: 'Viernes', morning: 'Disponible', night: 'Disponible' },
        { day: 'Sábado', morning: 'Libre', night: 'Libre' },
        { day: 'Domingo', morning: 'Libre', night: 'Libre' }
    ],
    'Empleado Clínica': [
        { day: 'Lunes', morning: 'Disponible', night: 'Disponible' },
        { day: 'Martes', morning: 'Disponible', night: 'Disponible' },
        { day: 'Miércoles', morning: 'Disponible', night: 'Disponible' },
        { day: 'Jueves', morning: 'Disponible', night: 'Disponible' },
        { day: 'Viernes', morning: 'Disponible', night: 'Disponible' },
        { day: 'Sábado', morning: 'Libre', night: 'Libre' },
        { day: 'Domingo', morning: 'Libre', night: 'Libre' }
    ]
};

const CalendarioTrabajo = () => {
    const [selectedEmployee, setSelectedEmployee] = useState('Empleado RRHH');
    const [shifts, setShifts] = useState(initialShifts);

    // Función para modificar el turno de un empleado específico
    const handleShiftChange = (dayIndex, shiftType) => {
        const newShifts = { ...shifts };
        newShifts[selectedEmployee][dayIndex][shiftType] = 
            newShifts[selectedEmployee][dayIndex][shiftType] === 'Disponible' ? 'Ocupado' : 'Disponible';
        setShifts(newShifts);
    };

    // Función para guardar los cambios
    const handleSave = () => {
        alert(`Turnos guardados para ${selectedEmployee}`);
        // Aquí puedes implementar la lógica para guardar los turnos en una base de datos o API
    };

    const handleDiscard = () => {
        setShifts(initialShifts);  // Reestablecer los turnos
    };

    return (
        <div className="calendario-container">
            <h1>Calendario de Trabajo</h1>

            {/* Selector de empleados */}
            <div className="employee-selector">
                <label htmlFor="employee">Seleccionar Empleado: </label>
                <select 
                    id="employee" 
                    value={selectedEmployee} 
                    onChange={(e) => setSelectedEmployee(e.target.value)}
                >
                    {employees.map((employee) => (
                        <option key={employee} value={employee}>
                            {employee}
                        </option>
                    ))}
                </select>
            </div>

            <table className="shift-table">
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Turno Mañana</th>
                        <th>Turno Noche</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts[selectedEmployee].map((shift, index) => (
                        <tr key={shift.day}>
                            <td>{shift.day}</td>
                            <td 
                                className={shift.morning === 'Disponible' ? 'available' : 'occupied'}
                                onClick={() => handleShiftChange(index, 'morning')}
                            >
                                {shift.morning}
                            </td>
                            <td 
                                className={shift.night === 'Disponible' ? 'available' : 'occupied'}
                                onClick={() => handleShiftChange(index, 'night')}
                            >
                                {shift.night}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="button-group">
                <button onClick={handleSave} className="save-btn">Guardar Cambios</button>
                <button onClick={handleDiscard} className="discard-btn">Descartar Cambios</button>
            </div>
        </div>
    );
};

export default CalendarioTrabajo;
