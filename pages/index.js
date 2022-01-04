import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
//importa el Hook para usar diferentes idiomas en los textos.
import { useLocales } from "../components/useLocales";

export default function Home() {
  //esta variable almacena el objeto importado de es.js o en.js
  const text = useLocales("home");
  return (
    <Layout title="Fairy's Wood - Home Alquiler cabañas El Bolsón" active="inicio" >
      <div className="container">
        <h1>
          {text.title}
        </h1>
        <div className="row">
          <div className="col-lg-6">
            <Carousel />
          </div>
          <div className="col-lg-6">
            <p className="me-auto mb-2 mb-lg-0"> {text.p1}
            </p>
            <br />
            <p className="me-auto mb-2 mb-lg-0"> {text.p2}
            </p>
          </div>
        </div>
        {/*Este div y el script importa el widget de IG */}
        <div data-mc-src="e1d39ac5-eb71-4baa-be69-603590189841#instagram"></div>

        <script
          src="https://cdn2.woxo.tech/a.js#61cca236c8b7380016816a54"
          async data-usrc>
        </script>
      </div>
    </Layout >
  )
}
