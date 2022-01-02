import Layout from "../components/Layout"
export default function Home() {
  return (
    <Layout title="Fairy's Wood - Acerca de Nosotros" active="aboutus" >
        <div className="container">
          <h1>
            Acerca de Fairy&apos;s Wood
          </h1>
          <div className="row">
            <div className="col-md-6">
              <p className="me-auto mb-2 mb-lg-0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a nam qui ipsam ex nesciunt autem unde hic eum quibusdam, enim eaque officia iusto aspernatur consequatur iste at sequi ipsum?</p>
            </div>
          </div>
        </div>
    </Layout>
  )
}
