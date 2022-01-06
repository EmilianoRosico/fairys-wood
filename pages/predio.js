import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Card2 from '../components/Card2'

function predio() {
    return (
        <Layout title="Fairy's Wood - Nuestro predio" active="photos">
            <div className="container">
                <h1>Nuestro predio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ad eligendi, distinctio tempora fuga illo esse neque ipsum commodi reiciendis cupiditate possimus laboriosam ullam maxime officia architecto quae atque in.</p>
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
