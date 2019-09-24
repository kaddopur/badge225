import React from 'react';
import { useBadgeState } from '../contexts/badgeContext';
import logo from '../assets/logo.svg';
import sana from '../assets/sana.png';
import './Badge.css';

const Badge = () => {
  const { color, name, photo = sana } = useBadgeState();

  return (
    <div id="badge">
      <img className="logo" src={logo} alt="" />
      <div className="name">
        {name.split('\n').map((chunk, index) => (
          <span key={index}>
            <span>{chunk}</span>
            <br />
          </span>
        ))}
      </div>
      <div
        className="avatar"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className="top-overlay"></div>
      <div className="bottom-overlay" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Badge;
