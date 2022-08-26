import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      {/* <footer>Footer</footer> */}
    </>    
  );
};

export default Layout;