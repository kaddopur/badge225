import React from 'react';
import './Badge.css';
import yIcon from './yicon.svg';
import sana from './sana.png';

const Badge = () => {
  return (
    <div id="badge">
      <img className="logo" src={yIcon} alt="" />
      <div className="name">
        minatozaki
        <br />
        sana
      </div>
      <div className="avatar" style={{ backgroundImage: `url(${sana})` }}></div>
      <div className="top-overlay"></div>
      <div className="bottom-overlay"></div>
    </div>
  );
};

export default Badge;
