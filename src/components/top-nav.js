import React from 'react';

import './styles/top-nav.css';

export default function TopNav(props) {
  return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={props.onClick}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

