import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Image
          src="/original.svg"
          alt="Disney+ Logo"
          width={80}
          height={43}
          style={{ cursor: 'pointer' }}
          onClick={() => router.push('/')}
        />
        <section className="nav__buttons">
          <button className="nav__buttons--suscribe">
            SUSCRIBITE AHORA
          </button>
          <button className="nav__buttons--button" onClick={() => router.push('/login')}>
            INICIAR SESIÓN
          </button>
        </section>
      </nav>
    </header>
  );
}