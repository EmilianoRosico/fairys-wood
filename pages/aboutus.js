import Layout from "../components/Layout"
//importa el Hook para usar diferentes idiomas en los textos.
import { useLocales } from "../components/useLocales";

export default function Home() {
  const text = useLocales("about");
  return (
    <Layout title={text.title} active="aboutus" >
      <div className="container">
        <h1>
          {text.title}
        </h1>
        <div className="row">
          <div className="col-md-6">
            <p className="me-auto mb-2 mb-lg-0">{text.p1}</p>
            <br />
            <strong>{text.subtitle}</strong>
            <p className="me-auto mb-2 mb-lg-0">
              {text.p2}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
