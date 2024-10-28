import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/menustyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart, faGem, faTshirt, faMugHot, faPalette, faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    // Función para manejar el clic en el icono de usuario
    const handleUserClick = () => {
        alert("Perfil de usuario"); // Puedes reemplazar esto con la navegación a la página de perfil
    };

    // Función para manejar el clic en el icono de corazón
    const handleHeartClick = () => {
        alert("Artículos favoritos"); // Puedes reemplazar esto con la navegación a la página de favoritos
    };

    return (
        <header className="menu position-fixed w-100" style={{ top: 0, left: 0, zIndex: 1000, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="logo">
                <h1>Rutas del Arte</h1>
            </div>
            <nav className='mt-2'>
                <ul>
                    <li><a href="#joyeria"><FontAwesomeIcon icon={faGem} /> Joyería</a></li>
                    <li><a href="#textiles"><FontAwesomeIcon icon={faTshirt} /> Textiles</a></li>
                    <li><a href="#ceramica"><FontAwesomeIcon icon={faMugHot} /> Cerámica</a></li>
                    <li><a href="#pinturas"><FontAwesomeIcon icon={faPalette} /> Pinturas</a></li>
                    <li><a href="#otras"><FontAwesomeIcon icon={faEllipsisH} /> Otras</a></li>
                </ul>
            </nav>
            <div className="search-cart">
                <div className="search-container">
                    <input type="text" placeholder="Buscar..." />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <button><FontAwesomeIcon icon={faShoppingCart} /></button>
                <div className="user-icons">
                    <FontAwesomeIcon icon={faUser} onClick={handleUserClick} style={{ cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faHeart} onClick={handleHeartClick} style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </header>
    );
}

export default Menu;
