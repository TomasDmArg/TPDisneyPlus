import Image from "next/image";
import { images } from '../../constants/images';
import React from "react";

export default function Soon() {

  // Estado que contiene la sección seleccionada, "ej. Tendencias = 1"
  const [section, setSection] = React.useState(0);

  return (
    <section className="soon">
      {/* Botones titulos = images[i][0] */}
      <section className="soon__buttons">
        {images.map((image, i) => (
          <button
            className={`soon__buttons--button ${section === i && 'active'}`}
            onClick={() => setSection(i)}
            key={i}
          >
            {image[0]}
          </button>
        ))}
      </section>
      {/* Imagenes = images[i][j] */}
      <section className="soon__images">
        {images[section].slice(1).map((image, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt="Disney+ Logo"
            key={i}
          />
        ))}
      </section>
    </section>
  );
}