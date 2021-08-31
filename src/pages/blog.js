import React from "react";
import Layout from "../components/layout.js";
import { Link } from "gatsby";
import usePostNodeData from "../hooks/usePostNodeData.js";

const BlogPage = () => {
  //grab an array of each md posts title and date
  const postNodeDataArray = usePostNodeData();

  return (
    <Layout>
      <h1>Blog</h1>
      <h3>Recent Posts</h3>
      {/* Iterate over postNodeDataArray and create a li element for each one*/}
      <ol>
        {postNodeDataArray.map(({ title, date, slug }) => (
          // unique key by concatenating title and date of post
          <li key={`${title}${date}`}>
            <h2>
              <Link to={slug}>{title}</Link>
            </h2>
            <p>{date}</p>
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
