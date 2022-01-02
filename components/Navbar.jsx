import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar({ active }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <Link href="/" passHref>
          <a>
            <Image
              src="/logo.jpeg"
              alt="Fairy's Logo"
              width={70}
              height={70}
              className="rounded-circle"
            />
          </a>
        </Link>
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
              <Link href="/">
                <a className={`nav-link fs-4 ${active == "inicio"?" active":""}`} aria-current="page">
                  Inicio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutus">
                <a className={`nav-link fs-4 ${active == "aboutus"?" active":""}`} aria-current="page">
                  Nosotros
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/photo">
                <a className={`nav-link fs-4 ${active == "photos"?" active":""}`} aria-current="page">
                  Fotos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/map">
                <a className={`nav-link fs-4 ${active == "map"?" active":""}`} aria-current="page">
                  Como llegar
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/activity">
                <a className={`nav-link fs-4 ${active == "activity"?" active":""}`} aria-current="page">
                  Actividades
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
