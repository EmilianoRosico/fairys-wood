import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap";
import "../styles/globals.css";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const { events: routerEvents } = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    routerEvents.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      routerEvents.off('routeChangeComplete', handleRouteChange)
    }
  }, [routerEvents])
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;