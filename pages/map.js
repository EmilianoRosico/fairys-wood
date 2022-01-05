import React from 'react'
import Layout from '../components/Layout'
import { useLocales } from "../components/useLocales";

export default function Map() {
    const text = useLocales("about");
    return (
        <Layout title={text.map_title} active="map">
            <div className="container">
                <h1>{text.map_title}</h1>
            </div>
            <div className="container-fluid div-map" >
                <iframe width="100%" className="vh-100" loading="lazy" allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMWwSkfi_G5YRgFrKdFDNoMU&key=AIzaSyBq3QtSgFghJvpltFNJa7dLG1zJEVVNnS4"></iframe>
            </div>
            <style jsx>
                {`
                    .div-map {
                        min-height: 300px;
                        min-width: 400px;
                        max-width: 800px;
                    }
                `}
            </style>
        </Layout>
    )
}
