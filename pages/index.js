import Head from 'next/head'
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cta from '../components/index/Cta';
import Soon from '../components/index/Soon';
import Plans from '../components/index/Plans';
import Platforms from '../components/index/Platforms';
import Download from '../components/index/Download';
import Devices from '../components/index/Devices';

export default function Home() {

  return (
    <React.Fragment>
      <Head>
        <title>Disney+</title>
        <meta name="description" content="Clon del sitio de disney plus, por Tomas Di Mauro (tmdm.com.ar) " />
        <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
      </Head>

      <Navbar />

      <main className="main">
        <Cta />
        <Soon />
        <Plans />
        <Platforms />
        <Download />
        <Devices />
      </main>

      <Footer />
    </React.Fragment>
  )
}
