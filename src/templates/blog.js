import React from "react";
import Layout from "../components/layout.js";
import Head from "../components/head.js";
import { graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';

//using graphql in this manner grabs the slug variable from our context object in the gatsby-node file
export const postBySlug = graphql`
  query ($slug: String!) {
    contentfulBlogPost (
      slug: {
        eq: $slug
        }
    ) {
      title
      publishedDate(formatString: "YYYY-MM-DD")
      body {
        raw
        references {
          contentful_id
          __typename
          title
          fixed {
            width
            height
            src
          }
        }
      }
    }
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
  const isContentfulPost = data.contentfulBlogPost;
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.title;
        const url = node.data.target.fixed.src;
        return <img alt={alt} src={url} />
      }
    }
  };

  return isContentfulPost? (
    <Layout>
      <Head pageTitle={data.contentfulBlogPost.title}/>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>
  ) : (
    <Layout>
      <Head pageTitle={data.markdownRemark.frontmatter.title}/>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.publishedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  );
};

export default Blog;
