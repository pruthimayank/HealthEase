import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar bg-dark navbar-expand-lg px-2 py-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            Health<span className="text-info">Ease</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/finance">
                  Finance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointment">
                  Online Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
