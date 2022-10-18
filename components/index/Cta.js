import Image from "next/image";
export default function Cta() {
  return (
    <section className="cta">
      <section className="cta__main">
        <h3>Tus historias favoritas, todas en un mismo lugar.</h3>
        <Image
          src="/original.svg"
          alt="Disney+ Logo"
          width={330}
          height={185}
        />
        <a className="cta__button" href="#plans">
          ELEGÍ TU PLAN
        </a>
      </section>
    </section>
  );
}