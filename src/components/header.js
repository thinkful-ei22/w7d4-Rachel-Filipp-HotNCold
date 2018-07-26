import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './styles/header.css';

export default function Header(props) {
  const currentOverlay = props.overlay;
  if (currentOverlay === false) {
    return (
            <header>
                <TopNav onClick={() => props.onClick()} />
                <h1>HOT or COLD</h1>
            </header>
        );
  } else {
    return (
            <header>
                <TopNav onClick={() => props.onClick()} />
                <InfoModal onClick={() => props.onClick()}/>
                <h1>HOT or COLD</h1>
            </header>
        );

  }
}

