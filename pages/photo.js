import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import cabaña1 from "../public/cabaña1B.jpg"
import cabaña2 from "../public/cabaña2B.jpg"
import pradera from "../public/pradera.jpg"
import { useLocales } from "../components/useLocales";

export default function Photo() {
    const text = useLocales("about");
    return (
        <Layout title="Fairy's Wood - Fotos" active="photos" >
            <div className="container">
                <h1>{text.photos_title} </h1>
                <div className="row">
                    <div className="col-lg-4">
                        <h4>Huet-Huet</h4>
                        <div className="zoom">
                            <Link href="huethuet" passHref>
                                <a>
                                    <Image src={cabaña1} className="d-block w-100 " alt="Foto Cabaña1" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4>Chucao</h4>
                        <div className="zoom">
                            <Link href="chucao" passHref>
                                <a>
                                    <Image src={cabaña2} className="d-block w-100" alt="Foto Cabaña2" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4>Predio</h4>
                        <div className="zoom">
                            <Link href="predio" passHref>
                                <a>
                                    <Image src={pradera} className="d-block w-100" alt="Foto Pradera" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                .zoom {
                    transition: transform .2s; /* Animation */
                    padding: 9px;

                }   
                .zoom:hover {
                    transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
                }
                `}
            </style>
        </Layout>
    )
}