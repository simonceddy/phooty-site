import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styled-theming';

import Menu from './Menu';

function Header({ children, themes }) {
  const titleColor = theme('mode', themes.maps.primaryTitle);

  const Title = styled.h1`
    color: ${titleColor};
    font-size: 4rem;
    text-decoration: none;
  `;

  return (
    <div className="w-full mb-2 flex flex-col">
      <div className="flex flex-row items-center justify-between px-2">
        <Link to="/"><Title>Phooty</Title></Link>
        <div>
          {children}
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
