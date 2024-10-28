import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import imagen1 from '../assets/images/CorazonDeTela.jpg';
import Menu from './Menu';

const PaginaPrincipal = () => {
    // Definir estilos constantes fuera del componente
    const containerStyle = {
        backgroundColor: '#bacca7',
        borderRadius: '15px',
        height: '270px',
        width: '250px',
    };

    const priceStyle = {
        position: 'absolute',
        bottom: '10px',
        left: 0,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#bacca7', // Color de fondo heredado para evitar dependencias de otro estilo
        borderRadius: '0 0 15px 15px', // Opcional para coincidir con el contenedor
    };

    return (
        <>
            <Menu/>
            <div className='mt-3'>.</div>
            <div className="container-fluid p-4 mt-5">
                <div className="row justify-content-center">
                    {Array(12).fill().map((_, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-4 col-sm-6 mb-4 p-2 me-4"
                            style={containerStyle}
                        >
                            <Link to={`/producto/${12345}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="position-relative" style={{ height: '100%' }}>
                                    <img
                                        src={imagen1}
                                        alt="Producto 1"
                                        className="img-fluid"
                                        style={{
                                            borderRadius: '10px',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div className="position-absolute" style={priceStyle}>$60</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PaginaPrincipal;
