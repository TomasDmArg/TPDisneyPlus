import React from 'react';
import Image from 'next/image';

export default function Platforms() {
  return (
    <section className="platforms">
      <Image
        src="/original.png"
        alt="Disney+ Platforms"
        width={598}
        height={478.41}
      />
      <section className="platforms__right">
        <h3>Cuando quieras donde quieras</h3>
        <p>Disfrutalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros. Viví una experiencia única con una amplia selección de títulos en 4K. Además, podés ver en cuatro pantallas en simultáneo para que nadie se quede afuera.</p>
      </section>
    </section>
  );
}