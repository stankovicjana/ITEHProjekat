import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({token}) {
    function odjava(){ 
    }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            PRODAVNICA TEHNIKE
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Početna
              </Link>
            </li>
            {token == null ? 
                <>
                <li className="nav-item">
                    <Link className="nav-links" to="/login">Uloguj se  </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-links" to="/register">Registruj se  </Link>
                </li>
                </>
                :
                <>
                <li className="nav-item">
                    <Link className="nav-links" to="/proizvodi">Ponuda  </Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-links" to="/"  onClick={odjava}>Odjavi se  </Link>
                </li>
                </>
            }   
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;