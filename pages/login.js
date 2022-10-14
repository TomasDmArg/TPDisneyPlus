import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Login() {
  const router = useRouter()
  // TBC
  return (
    <React.Fragment>
      <Head>
        <title>Disney+ - Login</title>
        <meta name="description" content="Clon del sitio de disney plus, por Tomas Di Mauro (tmdm.com.ar) " />
        <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
      </Head>
      <main>
        <h1>Login</h1>
        <p>Sitio en construcción, <button onClick={() => router.push("/")}>Volver a inicio</button> </p>
      </main>
    </React.Fragment>
  )
}