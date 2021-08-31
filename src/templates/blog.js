import React from 'react';
import Layout from '../components/layout.js';
import { graphql } from 'gatsby';

//using graphql in this manner grabs the slug variable from our context object in the gatsby-node file
export const postBySlug = graphql`
  query ($slug: String!) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        publishedDate(formatString: "YYYY-MM-DD")
      }
      html
    }	
  }
`;

//our query is then passed to the component as a prop
const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  );
};

export default Blog;