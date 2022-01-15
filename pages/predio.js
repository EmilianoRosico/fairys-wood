import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Card2 from '../components/Card2'

function predio() {
    return (
        <Layout title="Fairy's Wood - Nuestro predio" active="photos">
            <div className="container">
                <h1>Nuestro predio</h1>
                <p>Compartimos algunas imágenes de la chacra en diferentes épocas del año. La distancia entre ambas cabañas es de aproximadamente 75 metros, lo que confiere un entorno intimo a cada una.</p>
            </div>
            <div className="container">

                <div className="row">
                    <Card picture="/pradera/pradera1.jpg" />
                    <Card picture="/pradera/pradera2.jpg" />
                    <Card picture="/pradera/pradera3.jpg" />
                    <Card picture="/pradera/pradera4.jpg" />
                    <Card2 picture="/pradera/pradera10.jpg" />
                    <Card2 picture="/pradera/pradera11.jpg" />
                    <Card2 picture="/pradera/pradera12.jpg" />

                </div>
            </div>
        </Layout>
    )
}

export default predio
