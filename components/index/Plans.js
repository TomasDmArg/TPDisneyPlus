import React from 'react';
import { plans } from '../../constants/plans';
import { useRouter } from 'next/router';

export default function Plans() {
  const router = useRouter();
  return (
    <section className="plan" id="plans">
      <h3>Elegí tu plan</h3>
      <section className="plan__cards">
        {plans.map((plan, i) => (
          <section className="plan__cards--card" key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={plan.img}
              alt="Disney+ Plans"
            />
            <h4>{plan.title}</h4>
            <p>{plan.description}</p>
            <button className="plan__cards--button" onClick={() => router.push("/register")}>
              {plan.button}
            </button>
          </section>
        ))}
      </section>
      <p className="plan__cards--disclaimer">
        * El precio podría variar en caso de que el pago se realice en otras plataformas. Podrían aplicar cargos de terceros.
      </p>
    </section>
  );
}