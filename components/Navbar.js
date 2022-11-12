import Image from "next/image";
import React from "react";

import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter()

  const [toggleButton, setToggleButton] = React.useState();

  React.useEffect(() => {

    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY);
      if (window.scrollY > 500) {
        setToggleButton(true);
      } else if (window.scrollY < 500) {
        setToggleButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <nav className="header__nav">
        <Image
          src="/original.svg"
          className={`img ${toggleButton ? 'active' : ''}`}
          alt="Disney+ Logo"
          width={80}
          height={43}
          style={{ cursor: 'pointer' }}
          onClick={() => router.push('/')}
        />
        <section className="nav__buttons">
          <button onClick={() => router.push('/register')} className={`nav__buttons--suscribe ${toggleButton ? 'active' : ''}`}>
            SUSCRIBITE AHORA
          </button>
          <button className="nav__buttons--button active" onClick={() => router.push('/login')}>
            INICIAR SESIÓN
          </button>
        </section>
      </nav>
    </header>
  );
}