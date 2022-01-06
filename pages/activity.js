import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'

function activity() {
    return (
        <Layout title="Fairy's Wood - Actividades" active="activity">
            <div className="container">
                <h1>Actividades en El Bolson</h1>
                <div className="row border mb-3">
                    <div className="col-md-6">
                        <p className="me-auto mb-2 mb-lg-0">
                            Pueden hacer actividades como trecking, pesca deportiva, avistaje de aves, conocer el cajón del Río Azul,
                            ascender a refugios de montaña, llegar al centro de esquí, encontrás la cascada Escondida, y la del Mallín Ahogado,
                            pueden hacer Canopy, rafting, cabalgatas, ciclismo, etc.
                        </p>
                    </div>
                    <div className="col-md-6 text-end">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium beatae consectetur. Odit ad quaerat rerum nisi blanditiis voluptate id iusto maiores similique explicabo cumque, consectetur molestias! Cupiditate, dolorem eum!</p>
                    </div>
                </div>
                <div className="row border mb-3">
                    <div className="col-md-6">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et at quibusdam deleniti fugiat modi eius sequi dignissimos laboriosam aliquam possimus debitis dicta dolore in omnis inventore, quis corporis vero delectus?</p>
                    </div>
                    <div className="col-md-6 text-end">
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default activity
