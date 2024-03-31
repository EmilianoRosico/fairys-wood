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
          <meta name="title" content="Fairy's Wood - Cabañas Fairy's Wood - El Bolsón" />
          <meta name="description" content="Alquiler de Cabañas en El Bolsón, sobre la costa del río Azul. Entorno familiar y tranquilo donde disfrutar la naturaleza. Río Azul, El Bolson, Río Negro, Refugios de montaña, wharthon" />
          <meta name="google-site-verification" content="3hqFMLwfAdEYKu8igUBwdrz3htgAcb7keMl7RAYRO6M" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-ZF6PKCNB12`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZF6PKCNB12', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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