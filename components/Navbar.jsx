import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { useLocales } from "../components/useLocales";

function Navbar({ active }) {
  const text = useLocales("home");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <Link href="/" passHref>

          <Image
            src="/logo.jpeg"
            alt="Fairy's Logo"
            width={70}
            height={70}
            className="rounded-circle"
          />

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
              <Link
                href="/"
                className={`nav-link fs-4 ${active == "inicio"?" active":""}`}
                aria-current="page">

                {text.home}

              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/aboutus"
                className={`nav-link fs-4 ${active == "aboutus"?" active":""}`}
                aria-current="page">

                {text.about_us}

              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/photo"
                className={`nav-link fs-4 ${active == "photos"?" active":""}`}
                aria-current="page">

                {text.photos}

              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/map"
                className={`nav-link fs-4 ${active == "map"?" active":""}`}
                aria-current="page">

                {text.how_arrive}

              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/activity"
                className={`nav-link fs-4 ${active == "activity"?" active":""}`}
                aria-current="page">

                {text.activity}

              </Link>
            </li>
          </ul>
          <div>
          <LocaleSwitcher />
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
