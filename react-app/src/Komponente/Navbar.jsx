import { Link } from 'react-router-dom';
import './Navbar.css';

console.log(window.localStorage.getItem("auth_name"));

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
                {window.localStorage.getItem("auth_name")=='Admin'  ? 
                            <>
                     <li className="nav-item">
                        <Link className="nav-links" to="/admin">Admin  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/admin/inbox">Inbox  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/admin/analiza">Analiza  </Link>
                    </li>
                    </>
                    :
                    <>
                    <li className="nav-item">
                        <Link className="nav-links" to="/proizvodi">Ponuda  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/korpa">Korpa  </Link>
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