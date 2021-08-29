import React from "react";
import { Link } from "gatsby";
import useMetadata from "../hooks/useSiteMetadata";
import * as headerStyles from "./header.module.scss";

const Header = () => {
  const { title } = useMetadata();

  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.title}>
        <h1>{title}</h1>
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
