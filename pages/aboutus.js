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
            <p className="me-auto mb-2 mb-lg-0"> Somos un matrimonio que después de muchos años de trabajo como veterinarios, queremos compartir nuestra chacra en el bosque con gente que admire la Naturaleza y quiera descansar.</p>
            <br />
            <strong>Durante tu estancia:</strong>
            <p className="me-auto mb-2 mb-lg-0">
              Vivimos en la chacra y estamos a disposición de nuestros huéspedes para guiarlos y orientarlos en la zona.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
