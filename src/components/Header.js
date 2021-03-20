import React from 'react';
import './Header.css'

export const Header = ({bgColor, title}) => {
  return (
    <header className="header" style={{ backgroundColor: bgColor }}>
      <nav className="nav"> 
      <a>about</a>
      <a>trips</a>
      <a>pricing</a>
      <a>contact</a></nav>
      <div className="header-circle" />
      <h1 className="header-title">{title}</h1>
    </header>
  );
};
