import React from 'react';

import GuessForm from './guess-form';

import './styles/guess-section.css';

export default function GuessSection(props) {
  
  
  return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onSubmit={e => props.onSubmit(e.target.value)} />
        </section>
    );
}

