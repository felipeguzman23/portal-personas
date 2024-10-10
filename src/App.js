import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';  
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './components/Login/Login'; 
import JefeRRHH from './components/JefeRRHH/JefeRRHH'; 
import EmpleadoRRHH from './components/EmpleadoRRHH/EmpleadoRRHH'; 
import Empleadoclinica from './components/Empleadoclinica/Empleadoclinica'; 
import PostulacionesRRHH from './components/JefeRRHH/PostulacionesRRHH/PostulacionesRRHH';  
import CalendarioTrabajo from './components/JefeRRHH/CalendarioTrabajo/CalendarioTrabajo'; 
import Capacitaciones from './components/JefeRRHH/Capacitaciones/Capacitaciones'; 
import ClimasPersonales from './components/JefeRRHH/ClimasPersonales/ClimasPersonales'; 
import Prestamos from './components/JefeRRHH/Prestamos/Prestamos'; 
import VerCalendarioEmpleadoRRHH from './components/EmpleadoRRHH/VerCalendarioEmpleadoRRHH/VerCalendarioEmpleadoRRHH';  
import VerCalendarioEmpleadoClinica from './components/Empleadoclinica/VerCalendarioEmpleadoClinica/VerCalendarioEmpleadoClinica';  
import PostulacionesEmpleadoRRHH from './components/EmpleadoRRHH/PostulacionesEmpleadoRRHH/PostulacionesEmpleadoRRHH'; 
import CapacitacionesEmpleadoRRHH from './components/EmpleadoRRHH/CapacitacionesEmpleadoRRHH/CapacitacionesEmpleadoRRHH';
import ClimasPersonalesEmpleadoRRHH from './components/EmpleadoRRHH/ClimasPersonalesEmpleadoRRHH/ClimasPersonalesEmpleadoRRHH';
import PrestamosEmpleadoRRHH from './components/EmpleadoRRHH/PrestamosEmpleadoRRHH/PrestamosEmpleadoRRHH';
import Unauthorized from './components/Unauthorized/Unauthorized';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Redirigir la raíz (/) a la página de login */}
                    <Route path="/" element={<Navigate to="/login" />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />

                    {/* Rutas protegidas para Jefe de RRHH */}
                    <Route element={<ProtectedRoute allowedRoles={['JefeRRHH']} />}>
                        <Route path="/jefe-rrhh" element={<JefeRRHH />} />
                        <Route path="/postulaciones" element={<PostulacionesRRHH />} />
                        <Route path="/calendario" element={<CalendarioTrabajo />} />
                        <Route path="/capacitaciones" element={<Capacitaciones />} />
                        <Route path="/climas" element={<ClimasPersonales />} />
                        <Route path="/prestamos" element={<Prestamos />} />  
                    </Route>
                    
                    {/* Rutas protegidas para Empleado de RRHH */}
                    <Route element={<ProtectedRoute allowedRoles={['EmpleadoRRHH']} />}>
                        <Route path="/empleado-rrhh" element={<EmpleadoRRHH />} />
                        <Route path="/empleado-rrhh/calendario" element={<VerCalendarioEmpleadoRRHH />} /> {/* Ruta para ver calendario de Empleado RRHH */}
                        <Route path="/empleado-rrhh/postulaciones" element={<PostulacionesEmpleadoRRHH />} /> {/* Ruta para ver postulaciones de Empleado RRHH */}
                        <Route path="/empleado-rrhh/capacitaciones" element={<CapacitacionesEmpleadoRRHH />} /> {/* Ruta para ver capacitaciones de Empleado RRHH */}
                        <Route path="/empleado-rrhh/climas" element={<ClimasPersonalesEmpleadoRRHH />} /> {/* Ruta para ver climas de Empleado RRHH */}
                        <Route path="/empleado-rrhh/prestamos" element={<PrestamosEmpleadoRRHH />} /> {/* Ruta para ver prestamos de Empleado RRHH */}
                    </Route>
                    
                    {/* Rutas protegidas para Empleado de Clínica */}
                    <Route element={<ProtectedRoute allowedRoles={['Empleadoclinica']} />}>
                        <Route path="/empleadoclinica" element={<Empleadoclinica />} />
                        <Route path="/empleadoclinica/calendario" element={<VerCalendarioEmpleadoClinica />} /> 
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
