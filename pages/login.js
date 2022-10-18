import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import Navbar from '../components/NavbarLogin.js';
import Footer from '../components/FooterLogin.js';

export default function Login() {
  const router = useRouter()
  // TBC
  return (
    <React.Fragment>
      <Head>
        <title>Iniciar sesión | Disney+</title>
        <meta name="description" content="Clon del sitio de disney plus, por Tomas Di Mauro (tmdm.com.ar) " />
        <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
      </Head>
      <Navbar />
      <main className="main login">
        <section className="login__section">
          <h3 classname="h3">Inicia sesión con tu correo</h3>
          <p classname="p">
            Debes usar este correo electrónico y contraseña para iniciar sesión en tu cuenta de Disney+ y ver tus series y películas favoritas.
          </p>
          <input aria-invalid="false" aria-label="Escribe el correo electrónico que te gustaría usar para Disney Plus." aria-describedby="email__error" data-testid="" display="inline" id="email" maxlength="" name="email" placeholder="Correo electrónico" type="email" data-gv2elementkey="email" data-gv2interactionkey="email" classname="form" value="" />
          <button aria-label="Aceptar y continuar" data-testid="login-continue-button" role="button" kind="primary" name="dssLoginSubmit" value="submit" classname="btn" id="" type="submit" data-gv2elementkey="agree_&amp;_continue" data-gv2interactionkey="agree_&amp;_continue" data-gv2-interaction-bound="true">CONTINUAR</button>
          <section className="login__section--subscribe"><p class="p">¿Primera vez en Disney+?</p> <button>Suscribirse</button></section>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}