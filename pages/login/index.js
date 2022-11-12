import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = React.useState("");
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
          <input onChange={e => setEmail(e.target.value)} value={email} maxlength="" name="email" placeholder="Correo electrónico" type="email" />
          <button role="button" value="submit" classname="btn" type="submit"
            onClick={
              () => {
                router.push(`/login/${email}`);
              }
            }
          >CONTINUAR</button>
          <section className="login__section--subscribe"><p class="p">¿Primera vez en Disney+?</p> <button onClick={() => router.push("/register")}>Suscribirse</button></section>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}