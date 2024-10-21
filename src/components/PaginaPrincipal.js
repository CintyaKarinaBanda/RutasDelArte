import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import imagen1 from '../assets/images/CorazonDeTela.jpg';

const PaginaPrincipal = () => {
    const backgroundColorContainer = {
        backgroundColor: '#bacca7',
        borderRadius: '15px',
    };

    const priceStyle = {
        bottom: '10px',
        left: 0,
        width: '100%',
        textAlign: 'center',
        backgroundColor: backgroundColorContainer.backgroundColor,
    };

    return (
        <div className="container-fluid p-4">
            <div className="row justify-content-center"> 
                {Array(12).fill().map((_, index) => ( 
                    <div 
                        key={index} 
                        className="col-lg-3 col-md-4 col-sm-6 mb-4 p-2 me-4" 
                        style={{ ...backgroundColorContainer, height: '270px', width: '250px' }}
                    >
                        <Link to={`/producto/${12345}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="position-relative" style={{ height: '100%' }}>
                                <img 
                                    src={imagen1} alt="Producto 1" className="img-fluid" 
                                    style={{ borderRadius: '10px', width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                                <div className="position-absolute" style={priceStyle}>$60</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PaginaPrincipal;
