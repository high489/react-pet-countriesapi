import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../UI/header/Header';
import { MyNavLink } from './MyNavLink';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>    
  );
};

export { Layout };