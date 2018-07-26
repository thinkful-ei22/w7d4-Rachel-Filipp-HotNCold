import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './styles/header.css';

export default function Header(props) {
  const currentOverlay = props.overlay;
  if (currentOverlay === false) {
    return (
            <header>
                <TopNav switchOverlay={() => props.switchOverlay()} resetGame={() => props.resetGame()}/>
                <h1>HOT or COLD</h1>
            </header>
        );
  } else {
    return (
            <header>
                <TopNav switchOverlay={() => props.switchOverlay()} resetGame={() => props.resetGame()} />
                <InfoModal switchOverlay={() => props.switchOverlay()}/>
                <h1>HOT or COLD</h1>
            </header>
        );

  }
}

