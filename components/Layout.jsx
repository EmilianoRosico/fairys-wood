import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Fairy's Wood" content="Cabañas Fairy's Wood - El Bolsón" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
      
    </>
  );
}

export default Layout;
