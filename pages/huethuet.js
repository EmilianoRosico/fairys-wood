import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'

function huethuet() {
    return (
        <Layout title="Fairy's Wood - Huet-Huet">
            <div className="container">
                <h1>Cabaña Huet-Huet</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <h6>Incluye:</h6>
                        <ul>
                            <li>Dispenser Agua Potable.</li>
                            <li>Heladera Grande.</li>
                            <li>Horno.</li>
                            <li>Vajilla.</li>
                            <li>Termotanque.</li>
                            <li>Microondas.</li>
                            <li>TV con Directv</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            La cabaña cuenta con una habitación matrimonial con colchón de alta densidad, plumón e incluye ropa de blanco.
                            En el exterior hay balcón deck, un asador individual y pileta para lavado de ropa, Los vehículos se guardan dentro
                            de la propiedad.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <Card picture="/huet/cocina.jpg" />
                    <Card picture="/huet/comedor.jpg" />
                    <Card picture="/huet/comedor2.jpg" />
                    <Card picture="/huet/dormitorio1.jpg" />
                    <Card picture="/huet/dormitorio2.jpg" />
                    <Card picture="/huet/baño1.jpg" />
                    <Card picture="/huet/baño2.jpg" />
                    <Card picture="/huet/parrilla.jpg" />
                </div>
            </div>
        </Layout >
    )
}

export default huethuet
