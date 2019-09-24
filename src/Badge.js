import React from 'react';
import './Badge.css';
import logo from './logo.svg';
import sana from './sana.png';
import { useBadgeState } from './badgeContext';

const Badge = () => {
  const { color, name } = useBadgeState();

  return (
    <div id="badge">
      <img className="logo" src={logo} alt="" />
      <div className="name">
        {name.split('\n').map(chunk => (
          <>
            <span>{chunk}</span>
            <br />
          </>
        ))}
      </div>
      <div className="avatar" style={{ backgroundImage: `url(${sana})` }}></div>
      <div className="top-overlay"></div>
      <div className="bottom-overlay" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Badge;
