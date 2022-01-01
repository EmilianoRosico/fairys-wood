import Carousel from '../components/Carousel'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Fairy's Wood - Home">
      <div className="container">
        <h1>
          Bienvenidos a Fairy&apos;s Wood
        </h1>
        <div className="row">
          <div className="col-lg-6">
            <br />
            <p className="me-auto mb-2 mb-lg-0"> Ubicado en un predio de una hectárea con pradera, bosque, arroyo y limita con
              el Río Azul. La zona es muy tranquila y alejada del tránsito vehicular, ideal para observar las estrellas por la
              baja contaminación lumínica.
            </p>
            <br />
            <p className="me-auto mb-2 mb-lg-0">Se encuentra en el área Reserva Natural de Mallín Ahogado, a solo 5 minutos del
              centro de El Bolsón, corazón de las mejores actividades de aventura y relax; en la zona de la mayoría de los
              atractivos turísticos de la región. De nuestra parte les ofrecemos comodidad, calidez, con todos los servicios y
              un exquisito desayuno <strong>(opcional)</strong>, con pan, tortas y dulces, todo elaboración propia, y en la cabaña
              van a encontrar té, café para preparar.
            </p>
          </div>
          <div className="col-lg-6">
            <Carousel />
          </div>
        </div>
        <div data-mc-src="e1d39ac5-eb71-4baa-be69-603590189841#instagram"></div>

        <script
          src="https://cdn2.woxo.tech/a.js#61cca236c8b7380016816a54"
          async data-usrc>
        </script>
      </div>
    </Layout>
  )
}
