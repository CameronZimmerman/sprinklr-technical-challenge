import React from 'react';
import Header from './header.js';
import Footer from './footer.js';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;