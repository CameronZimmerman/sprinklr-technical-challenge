import React from "react";
import { Link } from "gatsby";
import * as headerStyles from './header.module.scss';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.title}><h1>Cameron's Blog</h1></Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navLink} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navLink} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navLink} to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyles.navLink} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
