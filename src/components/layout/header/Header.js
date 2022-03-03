import React from 'react';
import Logo from '../../../assets/logo.svg';
import './header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="logoBlock">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}
