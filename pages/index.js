import Carousel from '../components/Carousel'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Fairy's Wood - Home">
        <div className="container-fluid">
          <h1>
            Bienvenidos a Fairy's Wood
          </h1>
          <div className="row">
            <div className="col-md-6">
              <p className="me-auto mb-2 mb-lg-0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a nam qui ipsam ex nesciunt autem unde hic eum quibusdam, enim eaque officia iusto aspernatur consequatur iste at sequi ipsum?</p>
              {/*<button className="btn btn-primary m-3">Button Primary</button>*/}
            </div>
            <div className="col-md-6">
            <Carousel />
            </div>
          </div>
        </div>
    </Layout>
  )
}
