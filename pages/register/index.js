import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';
import { Group, PasswordInput } from "@mantine/core";

export default function Register() {
  const router = useRouter()
  const [password, setPassword] = React.useState("");
  const [login, setRegister] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [id, setID] = React.useState("");
  React.useEffect(() => {
    if (password.length > 0 && email.length > 0 && name.length > 0 && lastname.length > 0 && id.length > 0) {
      fetch(`https://tmdm.com.ar/disney/add.php?email=${email}&name=${name}&lastname=${lastname}&pass=${password}&DNI=${id}`, {
        origin: "https://tmdm.com.ar"
      }).then((data) => {
        if (data.status === 200) {
          router.push(`/dashboard/${email}`);
        } else {
          alert("Cuenta ya existente, o error en el formulario");
        }
        setRegister(false);
      });
    }
  }, [login]);


  return (
    <React.Fragment>
      <Head>
        <title>Suscribirse | Disney+</title>
        <meta name="description" content="Clon del sitio de disney plus, por Tomas Di Mauro (tmdm.com.ar) " />
        <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
      </Head>
      <Navbar />
      <main className="main login">
        <section className="login__section">
          <h3 className="h3">Suscribirse</h3>
          <p className="p">
            Ingrese los siguientes campos para suscribirse a Disney+.
          </p>

          <Group>
            <input onChange={e => setName(e.target.value)} autocomplete="off" value={name} maxlength="" name="name" placeholder="Nombre" type="name" />
            <input onChange={e => setLastname(e.target.value)} autocomplete="off" value={lastname} maxlength="" name="lastname" placeholder="Apellido" type="lastname" />
          </Group>

          <input onChange={e => setID(e.target.value)} autocomplete="off" value={id} maxlength="" name="id" placeholder="DNI" type="id" />
          <input onChange={e => setEmail(e.target.value)} autocomplete="off" value={email} maxlength="" name="email" placeholder="Correo electrónico" type="email" />
          <PasswordInput autocomplete="off" className="form" placeholder="Password" label="Contraseña" onChange={e => setPassword(e.target.value)} value={password} />

          <button role="button" value="submit" className="btn" type="submit"
            onClick={() => setRegister(true)}
          >CONTINUAR</button>
          <section className="login__section--subscribe">
            <p class="p"> ¿Ya tienes cuenta en Disney+?</p>
            <button onClick={() => router.push("/login")}>Ingresar</button>
          </section>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}