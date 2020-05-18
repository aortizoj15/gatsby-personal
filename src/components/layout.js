import React from 'react';
import Header from './header';
import Footer from './footer';
import AlertDisplay from './alertDisplay';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = props => {
  const { children } = props;
  return (
    <div className={layoutStyles.container}>
      <Header />
      <AlertDisplay />
      <div className={layoutStyles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
