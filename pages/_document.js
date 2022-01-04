import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head >
          <meta name="Fairy's Wood" content="Cabañas Fairy's Wood - El Bolsón" />
          <meta name="description" content="Alquiler de Cabañas en El Bolsón, sobre la costa del río Azul. Entorno familiar y tranquilo donde disfrutar la naturaleza." />
          <meta name="description" content="Río Azul, El Bolson, Río Negro, Refugios de montaña, wharthon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument