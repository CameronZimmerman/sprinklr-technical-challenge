import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import '../styles/index.scss';
import * as layoutStyles from './layout.module.scss';

//the Layout component will wrap the content of each of our pages, as well as display the header and footer
//grab children passed into Layout component and display in between header and footer
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
