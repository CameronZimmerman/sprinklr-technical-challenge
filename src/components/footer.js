import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata.js";
import * as footerStyles from "./footer.module.scss";

const Footer = () => {
  const { author } = useSiteMetadata();

  return (
    <footer className={footerStyles.footer}>
      <p>Created by { author }, © 2021</p>
    </footer>
  );
};

export default Footer;
