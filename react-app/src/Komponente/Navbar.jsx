import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({token, odjava}) {
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
                {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                            <>
                     <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/inbox">Inbox  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/analiza">Analiza  </Link>
                    </li>
                    </>
                    :
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/proizvodi">Ponuda  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/korpa">Korpa  </Link>
                    </li>
                    </>
                    }
                <li className="nav-item active">
                    <Link className="nav-links" to="/" onClick={odjava}>Odjavi se  </Link>
                </li>
                </>
            } 
            <li className="nav-item">
                    <Link className="nav-links" to="/kontakt"  >Kontakt  </Link>
            </li>  
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;