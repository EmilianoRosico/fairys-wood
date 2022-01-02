import Carousel from '../components/Carousel'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Fairy's Wood - Home" active="inicio" >
      <div className="container">
        <h1>
          Bienvenidos a Fairy&apos;s Wood
        </h1>
        <div className="row">
          <div className="col-lg-6">
            <Carousel />
          </div>
          <div className="col-lg-6">
            <p className="me-auto mb-2 mb-lg-0"> Ubicado en un predio de una hectárea con pradera, bosque, arroyo y limita con
              el Río Azul. La zona es muy tranquila y alejada del tránsito vehicular, ideal para observar las estrellas por la
              baja contaminación lumínica.
            </p>
            <br />
            <p className="me-auto mb-2 mb-lg-0">Se encuentra en el área Reserva Natural de Mallín Ahogado, a solo 5 minutos del
              centro de El Bolsón, corazón de las mejores actividades de aventura y relax; en la zona de la mayoría de los
              atractivos turísticos de la región. De nuestra parte les ofrecemos comodidad, calidez, tranquilidad y
              un exquisito desayuno <strong>(opcional)</strong> todo elaboración propia el cual incluye pan, tortas y dulces. La cabaña
              cuenta con té y café para preparar.
            </p>
          </div>
        </div>
        <div data-mc-src="e1d39ac5-eb71-4baa-be69-603590189841#instagram"></div>

        <script
          src="https://cdn2.woxo.tech/a.js#61cca236c8b7380016816a54"
          async data-usrc>
        </script>
      </div>
    </Layout >
  )
}
