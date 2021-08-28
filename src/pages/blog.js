import React from "react";
import Layout from "../components/layout.js";
import { Link } from "gatsby";

const BlogPage = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will go here!</p>
      <p>
        Interested in my content, feel free to learn more{" "}
        <Link to="/about">about me</Link>
      </p>
    </Layout>
  );
};

export default BlogPage;
