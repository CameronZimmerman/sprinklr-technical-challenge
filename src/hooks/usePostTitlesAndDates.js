import { graphql, useStaticQuery } from "gatsby";

const usePostTitlesAndDates = () => {
  //static query to grab markdown files from the src directory
  const fullMarkdownPostsQuery = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  );
  //grab the array of posts from the post query {allMarkdownRemark: { edges: [post1, post2, etc] }}
  const postDataArray = fullMarkdownPostsQuery.allMarkdownRemark.edges
  //map over array of posts and return only the title and date
  return postDataArray.map(post => ({
    title: post.node.frontmatter.title,
    date: post.node.frontmatter.date
  }));
};

export default usePostTitlesAndDates;
