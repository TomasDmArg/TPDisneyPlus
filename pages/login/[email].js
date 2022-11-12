import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';
import { PasswordInput } from "@mantine/core";

export default function Login() {
  const router = useRouter()
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (password.length > 0 && login) {
      console.log("Fetching...", router.query.email, password);
      fetch(`https://tmdm.com.ar/disney/check.php?email=${router.query.email}&pass=${password}`, {
        origin: "https://tmdm.com.ar"
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        if (data == 1) {
          router.push(`/dashboard/${router.query.email}`);
        } else {
          alert("Contraseña incorrecta");
        }
        setLogin(false);
      });
    }
  }, [login]);


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
          <h3 className="h3">Ingrese su contraseña</h3>
          <p className="p">
            Ahora ingrese su contraseña
          </p>
          <PasswordInput className="form" placeholder="Password" label="Contraseña" onChange={e => setPassword(e.target.value)} value={password} />
          <button role="button" value="submit" className="btn" type="submit"
            onClick={() => setLogin(true)}
          >CONTINUAR</button>
          <section className="login__section--subscribe">
            <p class="p"> ¿Primera vez en Disney+?</p>
            <button onClick={() => setLogin(true)}>Suscribirse</button>
          </section>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}