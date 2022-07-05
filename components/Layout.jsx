import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ title, active, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Fairy's Wood" content="Cabañas Fairy's Wood - El Bolsón" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fairy's Wood Alquiler de Cabañas, El Bolson, Rio Negro."></meta>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main>
        <Navbar active={active} />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
