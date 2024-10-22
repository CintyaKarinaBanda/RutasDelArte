import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambia Switch por Routes
import PaginaPrincipal from './components/PaginaPrincipal'; // Asegúrate de que la ruta sea correcta
import DescripcionProducto from './components/DescripcionProducto';
import ChatProducto from './components/ChatProducto'; // Asegúrate de que la ruta sea correcta

function App() {
    return (
        <Router>
            <Routes> {/* Cambia Switch por Routes */}
                <Route path="/" element={<PaginaPrincipal />} /> {/* Usa element en lugar de component */}
                <Route path="/producto/:id" element={<DescripcionProducto />} /> {/* Usa element en lugar de component */}
                <Route path="/chat-producto" element={<ChatProducto />} /> {/* Página de ChatProducto */}
            </Routes>
        </Router>
    );
}

export default App;
