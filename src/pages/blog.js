import React from "react";
import Layout from "../components/layout.js";
import Head from "../components/head.js";
import { Link } from "gatsby";
import useAllPostsNodeData from "../hooks/useAllPostsNodeData.js";
import * as blogStyles from './blog.module.scss';

const BlogPage = () => {
  //grab an array of each md posts title and date
  const postNodeDataArray = useAllPostsNodeData();

  return (
    <Layout>
      <Head pageTitle={"Blog"} />
      <h1>Blog</h1>
      <h3>Recent Posts</h3>
      {/* Iterate over postNodeDataArray and create a li element for each one*/}
      <ol className={blogStyles.posts}>
        {postNodeDataArray.map(({ title, date, slug }) => (
          // unique key by concatenating title and date of post
          // "slug" is the path to our specific page generated from each post
          <li key={`${title}${date}`} className={blogStyles.post}>
            <Link to={slug}>
              <h2>{title}</h2>
              <p>{date}</p>
            </Link>
          </li>
        ))}
      </ol>
      <p>
        Interested in more of my content? Feel free to learn more{" "}
        <Link to="/about">about me.</Link>
      </p>
    </Layout>
  );
};

export default BlogPage;
