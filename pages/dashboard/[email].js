import React from 'react';

import Head from 'next/head';

import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';

export default function Dashboard() {
  const [data, setData] = React.useState([]);
  const [dni, setDni] = React.useState('');
  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');

  const [newData, setNewData] = React.useState([]);
  React.useEffect(() => {
    fetch('https://tmdm.com.ar/disney/usuarios.php', {
      origin: 'https://tmdm.com.ar',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setNewData(data);
      });
  }, []);

  React.useEffect(() => {
    if (dni.length > 0) {
      setNewData(
        data.filter((item) => {
          return item.dni.includes(dni);
        })
      );
    }
    if (name.length > 0) {
      setNewData(
        data.filter((item) => {
          return item.nombre.includes(name);
        })
      );
    }
    if (lastname.length > 0) {
      setNewData(
        data.filter((item) => {
          return item.apellido.includes(lastname);
        }
        ));
    }
    if (dni.length == 0 && name.length == 0 && lastname.length == 0) {
      setNewData(data);
    }
  }, [name, lastname, dni])
  return (
    <React.Fragment>
      <Head>
        <title>Disney+</title>
        <meta name="description" content="Clon del sitio de disney plus, por Tomas Di Mauro (tmdm.com.ar) " />
        <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
      </Head>
      <Navbar />
      <main className="main dashboard">
        <section className="dashboard__section">
          <h3 classname="h3">Consultas</h3>
          <p>Filtrar por:</p>
          <input onChange={e => setDni(e.target.value)} value={dni} maxlength="" name="dni" placeholder="DNI" type="dni" />
          <input onChange={e => setName(e.target.value)} value={name} maxlength="" name="name" placeholder="Nombre" type="name" />
          <input onChange={e => setLastname(e.target.value)} value={lastname} maxlength="" name="lastname" placeholder="Apellido" type="lastname" />
          <table>
            <thead>
              <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Contraseña</th>
              </tr>
            </thead>
            <tbody>
              {newData.map((item, index) => (
                <tr key={index}>
                  <td>{item.dni}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.correo}</td>
                  <td>{item.contraseña}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}