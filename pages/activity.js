import React from 'react'
import Layout from '../components/Layout'

function activity() {
    return (
        <Layout title="Fairy's Wood - Actividades">
            <div className="container">
                <h1>Actividades en El Bolson</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p className="me-auto mb-2 mb-lg-0">
                            Pueden hacer actividades como trecking, pesca deportiva, avistaje de aves, conocer el cajón del Río Azul,
                            ascender a refugios de montaña, llegar al centro de esquí, encontrás la cascada Escondida, y la del Mallín Ahogado,
                            pueden hacer Canopy, rafting, cabalgatas, ciclismo, etc.
                        </p>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </Layout>
    )
}

export default activity
