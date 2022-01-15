import React from 'react'
import Layout from '../components/Layout'

function Prueba() {
    return (
        <Layout>
            {/* en cards para llamar el boton
            <Link href="#PhotoCarousel" passHref>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#PhotoCarousel" role="button" aria-expanded="false" aria-controls="PhotoCarousel">
                    <Image
                        src={picture}
                        className="card-img-top"
                        alt="..."
                        width={304}
                        height={405}
                    />
                </a>
            </Link>
            */}
            <div className="collapse floating vh-100" id="PhotoCarousel">
                <div className="text-end position2">
                    <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#PhotoCarousel" aria-expanded="false" aria-controls="PhotoCarousel">
                        Close
                    </button>
                </div>
                <div className="d-flex h-50 w-50 justify-content-center">

                    <div id="carouselExampleIndicators" className="carousel slide w-50" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../pradera/pradera1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../pradera/pradera2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../pradera/pradera3.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
            <style jsx>
                {`
                .floating {
                    position: absolute;
                    top: 0px;
                    background-color: #d1d5de;
                    width: 100%;
                    z-index: 2; 
                    opacity: 95%;
                }
                .position2 {
                    position: absolute;
                    right: 0px;
                }
                
                `}
            </style>
        </Layout>
    )
}

export default Prueba
