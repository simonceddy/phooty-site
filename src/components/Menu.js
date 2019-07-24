import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div className="w-full flex flex-row justify-around my-2">
      <NavLink className="menu-link" to="/" exact>Home</NavLink>
      <NavLink className="menu-link" to="/modules">Modules</NavLink>
      <NavLink className="menu-link" to="/footyjs">FootyJS</NavLink>
    </div>
  );
}

export default Menu;
