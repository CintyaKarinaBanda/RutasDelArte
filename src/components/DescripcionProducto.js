import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import corazonDeTela from '../assets/images/CorazonDeTela.jpg';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';


function DescripcionProducto() {
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
        <div className='container-fluid p-4 mt-5'> 
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>  
                <div>
                  <img 
                    src={corazonDeTela} 
                    alt='Imagen de un corazón hecho de tela' 
                    className='mb-1 img-fluid' 
                    style={imageStyle} 
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <Link to="/chat-producto">
                    <button type='button' className='btn' style={backgroundColorButton}>Contactar al proveedor</button>
                  </Link>
                </div>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12 mb-2 px-4'> 
                <div className='mb-3 p-2' style={{...backgroundColorContainer, maxHeight: '150px', overflow: 'auto' }}> 
                    <h3 className='text-center'>Corazón de Tela</h3>
                    <h1 className='text-center'>$60</h1>
                </div>
                <div style={{ ...backgroundColorContainer, maxHeight: '310px', overflow: 'auto'}}  className='p-3'>
                    <h5 className='text-center'>Descripción</h5>
                    <p>
                        Este encantador corazón de tela es una hermosa pieza de artesanía que agrega un toque cálido y acogedor a cualquier espacio. Confeccionado con cuidado y atención al detalle, está hecho de suaves y coloridos tejidos que lo hacen perfecto para decorar tu hogar, regalar a un ser querido o usar como un hermoso accesorio.
                    </p>
                    <p>
                        <strong>Características:</strong>
                    </p>
                    <ul>
                        <li><strong>Materiales de Alta Calidad:</strong> Fabricado con tela suave y duradera, garantizando que se mantenga en perfectas condiciones a lo largo del tiempo.</li>
                        <li><strong>Diseño Único:</strong> Cada corazón es único, con patrones y colores seleccionados para crear una pieza de arte que se destaca.</li>
                        <li><strong>Versatilidad:</strong> Ideal para usar como decoración en dormitorios, salas de estar o eventos especiales como bodas y aniversarios. También puede ser un regalo significativo para ocasiones especiales como el Día de San Valentín.</li>
                        <li><strong>Tamaño Perfecto:</strong> Su tamaño es ideal para colocar en estanterías, mesas o incluso en la cama como un tierno recordatorio de amor y cariño.</li>
                    </ul>
                    <p>
                        Añade un toque de amor y creatividad a tu vida con nuestro corazón de tela. Es más que una simple decoración; es un símbolo de cariño que puede ser apreciado todos los días.
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-12 mb-2' style={{maxHeight: '440px', overflow: 'auto'}}> 
              <h4 className='text-center'>Opiniones</h4>
              {/* Primer Comentario*/}
              <div>
                <div className='p-2 row mb-2' style={backgroundColorContainer}>
                  <div className='col-3 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faUser} className='fa-2x' /> 
                  </div>
                  <div className='col-9'>
                    <div>
                      <div>
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={regularStar} style={{ color: 'gold' }} />
                        <span className='text-muted'> (4/5)</span>
                      </div>
                      <div>La opinión varia de cada usuarios, por diferentes razones.</div>
                    </div>
                  </div>
                </div>
                {/* Segundo Comentario*/}
                <div className='p-2 row mb-2' style={backgroundColorContainer}>
                  <div className='col-3 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faUser} className='fa-2x' /> 
                  </div>
                  <div className='col-9'>
                    <div>
                      <div>
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={regularStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={regularStar} style={{ color: 'gold' }} />
                        <span className='text-muted'> (3/5)</span>
                      </div>
                      <div>La opinión varia de cada usuarios, por diferentes razones.</div>
                    </div>
                  </div>
                </div>
                {/* Tercer Comentario*/}
                <div className='p-2 row mb-2' style={backgroundColorContainer}>
                  <div className='col-3 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faUser} className='fa-2x' /> 
                  </div>
                  <div className='col-9'>
                    <div>
                      <div>
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={regularStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={regularStar} style={{ color: 'gold' }} />
                        <span className='text-muted'> (3/5)</span>
                      </div>
                      <div>La opinión varia de cada usuarios, por diferentes razones.</div>
                    </div>
                  </div>
                </div>
                {/* Cuarta Comentario*/}
                <div className='p-2 row mb-2' style={backgroundColorContainer}>
                  <div className='col-3 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faUser} className='fa-2x' /> 
                  </div>
                  <div className='col-9'>
                    <div>
                      <div>
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={regularStar} style={{ color: 'gold' }} />
                        <FontAwesomeIcon icon={regularStar} style={{ color: 'gold' }} />
                        <span className='text-muted'> (3/5)</span>
                      </div>
                      <div>La opinión varia de cada usuarios, por diferentes razones.</div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default DescripcionProducto;
