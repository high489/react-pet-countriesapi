import React, { FC, useState, useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { SContainer } from '../container/SContainer';
import { SHeader, SHeaderWrapper, STitle, SThemeSwitcher } from './styled-header';

const Header: FC = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <SHeader>
      <SContainer>
        <SHeaderWrapper>
          <STitle>Where in the world?</STitle>
          <SThemeSwitcher onClick={toggleTheme}>
            {theme === 'light'
            ? <IoMoonOutline size='14px'/>
            : <IoMoon size='14px'/>
            }{' '}
            <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
          </SThemeSwitcher>
        </SHeaderWrapper>
      </SContainer>
    </SHeader>
  );
};

export { Header };