import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import '../styles/index.scss';
import * as layoutStyles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.pageContainer}>
      <section className={layoutStyles.pageContent}>
        <Header />
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
