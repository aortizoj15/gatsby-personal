import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.css';

const Layout = props => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
