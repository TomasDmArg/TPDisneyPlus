import React from 'react';

import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons';

import { FAQ } from '../constants/faq';

export default function Faq() {
  return (
    <section className="faq">
      <h3>Preguntas frecuentes</h3>
      {/* Acordiones usando el contenido de FAQ */}
      <Accordion
        chevron={<IconPlus size={16} />}
        className="faq__accordion"
        styles={{
          chevron: {
            '&[data-rotate]': {
              transform: 'rotate(45deg)',
            },
          },
        }}
      >
        {FAQ.map((question, i) => (
          <Accordion.Item value={question[0]} key={i}>
            <Accordion.Control className="faq__accordion--control">{question[0]}</Accordion.Control>
            <Accordion.Panel className="faq__accordion--panel">
              {/* Replace line breaks with <br /> */}
              {question[1].split('/').map((text, i) => (
                <React.Fragment key={i}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  )
}