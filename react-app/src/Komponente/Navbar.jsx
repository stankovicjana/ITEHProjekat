import axios from 'axios';
import { Link } from 'react-router-dom'

function NavBar({token}) {
    function odjava(){ 
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Pocetna  </Link>
            </li>
            {token == null ? 
                <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Uloguj se  </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Registruj se  </Link>
                </li>
                </>
                :
                <>
                <li className="nav-item">
                    <Link className="nav-link" to="/proizvodi">Ponuda  </Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/"  onClick={odjava}>Odjavi se  </Link>
                </li>
                </>
            }   


            </ul>
        </div>
    </nav>
  );
}
export default NavBar;