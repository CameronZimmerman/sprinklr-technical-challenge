import React from "react";
import Layout from "../components/layout.js";
import { Link } from "gatsby";
import usePostTitlesAndDates from "../hooks/usePostTitlesAndDates.js";

const BlogPage = () => {
  //grab an array of each md posts title and date
  const postTitlesDatesArray = usePostTitlesAndDates();

  return (
    <Layout>
      <h1>Blog</h1>
      <h3>Recent Posts</h3>
      {/* Iterate over postTitlesDatesArray and create a li element for each one*/}
      <ol>
        {
          postTitlesDatesArray.map(({title, date}) => 
            // unique key by concatenating title and date of post
            <li key={`${title}${date}`}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
            )
        }
      </ol>
      <p>
        Interested in more of my content? Feel free to learn more{" "}
        <Link to="/about">about me.</Link>
      </p>
    </Layout>
  );
};

export default BlogPage;
