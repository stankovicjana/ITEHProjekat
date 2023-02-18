function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Meni</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item active">
                  <a className="nav-link" href="#">Početna <span class="sr-only">(trenutno)</span></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Proizvodi</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Cene</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#">Onemogućeno</a>
              </li>
              </ul>
          </div>
      </nav>
    );
  }
  
  export default NavBar;