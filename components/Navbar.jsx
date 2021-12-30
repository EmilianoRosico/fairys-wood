import React from "react";
import Image from "next/image";

function Navbar({ active }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <a href="/">
          <Image
            src="/logo.jpeg"
            alt="Fairy's Logo"
            width={70}
            height={70}
            className="rounded-circle"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fs-4 active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" aria-current="page" href="/aboutus">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" aria-current="page" href="/photo">
                Fotos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" aria-current="page" href="/map">
                Como llegar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" aria-current="page" href="/activity">
                Actividades
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
