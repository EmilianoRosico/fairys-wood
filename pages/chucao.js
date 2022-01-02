import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'

function chucao() {
    return (
        <Layout title="Fairy's Wood - Chucao" active="photos">
            <div className="container">
                <h1>Cabaña Chucao</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <span className="fw-bold fs-5" >Incluye:</span>
                        <ul>
                            <li>Dispenser Agua Potable.</li>
                            <li>Heladera Grande.</li>
                            <li>Horno.</li>
                            <li>Vajilla.</li>
                            <li>Termotanque.</li>
                            <li>Microondas.</li>
                            <li>TV con Directv.</li>
                            <li>Secador de pelo.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            La cabaña tiene capacidad de 4 a 6 personas.
                            <p><strong>Planta baja:</strong> Estar con sillones y mesa ratona, cocina completa, servicio de ropa de blanco (Sábanas y toallas); 1 baño completo, 1 habitación matrimonial con sommier con ropero, 1 habitación con cama cucheta.</p>
                            <p><strong>Planta alta:</strong> loft con 1 sommier matrimonial y 1 cama individual. </p>
                            Hay un asador y pileta para lavado de ropa. Los vehículos se guardan dentro de la propiedad.
                        </p>
                        <i>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="paw"
                                className="svg-inline--fa fa-paw fa-w-16"
                                role="img"
                                width="25"
                                height="25"
                                viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
                            </svg>
                        </i>
                        {"  "}
                        <span>Somos PET Friendly!</span>
                    </div>
                </div>
                <div className="row">
                    <Card picture="/chucao/cocina.jpg" />
                    <Card picture="/chucao/comedor1.jpg" />
                    <Card picture="/chucao/comedor2.jpg" />
                    <Card picture="/chucao/habitacion1.jpg" />
                    <Card picture="/chucao/habitacion2.jpg" />
                    <Card picture="/chucao/habitacion3.jpg" />
                    <Card picture="/chucao/habitacion4.jpg" />
                    <Card picture="/chucao/baño.jpg" />
                </div>
            </div>
        </Layout>
    )
}

export default chucao
