import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MyNavLink } from './MyNavLink';

const Layout: FC = () => {
  return (
    <>
      <header>
        <MyNavLink to='/'>Home</MyNavLink>
      </header>

      <main>
        <Outlet />
      </main>
      
      {/* <footer>Footer</footer> */}
    </>    
  );
};

export { Layout };