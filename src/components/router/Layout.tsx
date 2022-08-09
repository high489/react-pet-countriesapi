import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Main } from '../Main';

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

export { Layout };