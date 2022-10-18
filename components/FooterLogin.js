import Image from "next/image";
import React from "react";
import { IconWorld } from '@tabler/icons';
import { Select } from '@mantine/core';
import { links2 } from '../constants/links';

export default function Footer() {
  return (
    <footer className="footer2">
      <section className="logo">
        <Image
          src="/original.svg"
          alt="Disney+ Logo"
          width={80}
          height={43}
        />
      </section>
      <section className="centerFoot">
      <section className="links">
        <section className="links__right">
          {
            links2.map((link, i) => (
              <a href={link[1]} key={i}>{link[0]}</a>
            ))
          }
        </section>
      </section>
      <p className="disclaimer">Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por The Walt Disney Company (Argentina) S.A., Tucumán 1, Piso 4º (C1049AAA) Ciudad Autónoma de Buenos Aires, Argentina y número de CUIT 30-63984459-1. <br/> <br/>
      ©Disney. Todos los derechos reservados.
      </p>
    </section>
    </footer>
  );
}