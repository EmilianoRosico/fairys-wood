import React from "react";
import Image from "next/image";
import cabaña1 from "../public/cabaña1B.jpg";
import cabaña2 from "../public/cabaña2B.jpg";
import pradera from "../public/pradera.jpg";
import Link from "next/link";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link href="/huethuet" passHref>
              <a>
                <Image
                  src={cabaña1}
                  className="d-block w-100"
                  alt="Foto Cabaña1"
                />
                <div className="carousel-caption d-none d-md-block">
                  <span className="fw-bold">Cabaña Huet-Huet</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="carousel-item">
            <Link href="/chucao" passHref>
              <a>
                <Image
                  src={cabaña2}
                  className="d-block w-100"
                  alt="Fota Cabaña2"
                />
                <div className="carousel-caption d-none d-md-block">
                  <span className="fw-bold">Cabaña Chucao</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="carousel-item">
            <Link href="/predio" passHref>
              <a>
                <Image
                  src={pradera}
                  className="d-block w-100"
                  alt="Fota Predio"
                />
                <div className="carousel-caption d-none d-md-block">
                  <span className="fw-bold">Pradera</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
