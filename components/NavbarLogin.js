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
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className="header login">
      <nav className="header__nav">
        <Image
          src="/original.svg"
          alt="Disney+ Logo"
          width={80}
          height={43}
          style={{ cursor: 'pointer' }}
          onClick={() => router.push('/')}
        />
      </nav>
    </header>
  );
}