import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import cabaña1 from "../public/cabaña1B.jpg"
import cabaña2 from "../public/cabaña2B.jpg"
import pradera from "../public/pradera.jpg"

function photo() {
    return (
        <Layout title="Fairy's Wood - Fotos">
            <div className="container">
                <h1>Nuestras Fotos </h1>
                <div className="row">
                    <div className="col-lg-4">
                        <h4>Huet-Huet</h4>
                        <Link href="huethuet">
                            <a>
                                <Image src={cabaña1} className="d-block w-100" alt="Foto Cabaña1" />
                            </a>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <h4>Chucao</h4>
                        <Link href="chucao">
                            <a>
                                <Image src={cabaña2} className="d-block w-100" alt="Foto Cabaña2" />
                            </a>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <h4>Predio</h4>
                        <Link href="predio">
                            <a>
                                <Image src={pradera} className="d-block w-100" alt="Foto Pradera" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default photo
