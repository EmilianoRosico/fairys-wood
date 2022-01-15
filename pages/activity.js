import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import refugio from '../public/refugios1.jpg'
import cascada from '../public/cascada_mallin.jpg'
import bosque from '../public/bosquetallado.jpg'
//importa el Hook para usar diferentes idiomas en los textos.
import { useLocales } from "../components/useLocales";

function Activity() {
    //esta variable almacena el objeto importado de es.js o en.js
    const text = useLocales("about");
    return (
        <Layout title={text.activity_title} active="activity">
            <div className="container">
                <h1>{text.activity_title}</h1>
                <div className="mb-3">
                    <p className="me-auto mb-2 mb-lg-0">
                        {text.activity_principal}
                    </p>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <Image src={refugio} className="card-img-top" alt="Refugios" />
                            <div className="card-body">
                                <span className="card-title fs-4 fw-bold">{text.activity_ref_title}</span>
                                <p className="card-text"> {text.activity_ref_p} </p>
                                <a className=" btn btn-primary" href='https://www.turismoelbolson.gob.ar/refugios-de-montana' target='_blank' rel='noreferrer'>Más información</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <Image src={cascada} className="card-img-top" alt="Cascada Mallin" />
                            <div className="card-body">
                                <span className="card-title fs-4 fw-bold"> {text.activity_cat_title} </span>
                                <p className="card-text"> {text.activity_cat_p} </p>
                                <a className=" btn btn-primary" href='https://www.turismoelbolson.gob.ar/mallin-ahogado' target='_blank' rel='noreferrer'>Más información</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <Image src={bosque} className="card-img-top" alt="Bosque Tallado" />
                            <div className="card-body">
                                <span className="card-title fs-4 fw-bold">{text.activity_bos_title} </span>
                                <p className="card-text"> {text.activity_bos_p}  </p>
                                <a className=" btn btn-primary" href='https://www.turismoelbolson.gob.ar/bosque-tallado' target='_blank' rel='noreferrer'>Más información</a>
                            </div>
                        </div>
                    </div>
                    <p>Creditos e información: <a href="https://www.turismoelbolson.gob.ar/" target='_blank' rel='noreferrer'> Web turismo El Bolsón</a></p>
                </div>
            </div>
        </Layout>
    )
}

export default Activity
