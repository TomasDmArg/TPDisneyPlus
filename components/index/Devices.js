import React from 'react';
import { devices } from '../../constants/devices';

export default function Devices() {
  return (
    <section className="devices">
      <h3>Disponible en tus dispositivos favoritos</h3>
      <section>
        {
          devices.map((device, i) => (
            <section className="devices__card" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={device.img}
                alt="Disney+ Devices"
              />
              <h4>{device.title}</h4>
              <p>{device.desc.split('/').map((text, i) => (
                <React.Fragment key={i}>
                  {text}
                  <br />
                </React.Fragment>
              ))}</p>
            </section>
          ))
        }
      </section>
    </section>
  );
}