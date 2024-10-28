import React from 'react';
import corazonDeTela from '../assets/images/CorazonDeTela.jpg';
import Menu from './Menu';

function ChatProducto() {

  const backgroundColorContainer = {
      backgroundColor: '#bacca7', 
      borderRadius: '15px', 
  };

  const backgroundColorButton = {
      backgroundColor: '#a5b76d', 
      borderRadius: '15px', 
  };

  const imageStyle = {
      width: '100%', 
      height: '400px', 
      objectFit: 'cover',
      borderRadius: '10px', 
  };

  return (
    <>
      <Menu/>
      <div className='mt-2'>.</div>
      <div className='container-fluid p-3 mt-5'> 
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>  
            <div>
              <img src={corazonDeTela} alt='Imagen de un corazón hecho de tela' className='mb-1 img-fluid' style={imageStyle} />
            </div>
            <div className='d-flex justify-content-center'>
              <button type='button' className='btn' style={backgroundColorButton}>Comprar</button>                
            </div>
          </div>
          
          <div className='col-lg-8 col-md-6 col-sm-12'>
            <div className='d-flex justify-content-center align-items-center p-2 mb-3' style={{ backgroundColor: '#a5b76d', borderRadius: '10px'}}>
              <h3 className='text-center'>Nombre del producto</h3>
            </div>

            <div className='d-flex flex-column gap-3' style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <div className='bg-light rounded shadow-sm p-2'>
                <p className='mb-0'>La opinión varía de cada usuario, por diferentes razones.</p>
              </div>
              <div className='bg-dark text-white rounded shadow-sm p-2'>
                <p className='mb-0'>La opinión varía de cada usuario, por diferentes razones etcetera.</p>
              </div>
              <div className='bg-light rounded shadow-sm p-2'>
                <p className='mb-0'>La opinión varía entre los usuarios por diferentes razones, como sus preferencias personales, experiencias previas, expectativas y necesidades específicas. Algunos pueden valorar más la calidad del producto.</p>
              </div>
              <div className='bg-dark text-white rounded shadow-sm p-2'>
                <p className='mb-0'>La opinión varía de cada usuario.</p>
              </div>
              <div className='bg-light rounded shadow-sm p-2'>
                <p className='mb-0'>La opinión varía de cada usuario, por diferentes razones.</p>
              </div>
              <div className='bg-dark text-white rounded shadow-sm p-2'>
                <p className='mb-0'>La opinión varía de cada usuario.</p>
              </div>
            </div>

            <div className='mt-4'>
              <input
                type="text"
                className="form-control rounded-pill border-0 shadow-sm"
                placeholder="Escribe tu mensaje..."
                style={{ backgroundColor: '#f0f0f0' }}
              />
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default ChatProducto;
