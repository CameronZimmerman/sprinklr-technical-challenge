import { graphql, useStaticQuery } from "gatsby";

const useAllPostsNodeData = () => {
  //static query to grab markdown files from the src directory
  const allPostsQuery = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "YYYY-MM-DD")
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                publishedDate
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  //grab the array of markdown posts from the post query {allMarkdownRemark: { edges: [post1, post2, etc] }}
  //map over array of posts and return only the title, date and slug
  const markdownPostArray = allPostsQuery.allMarkdownRemark.edges.map(post => ({
    title: post.node.frontmatter.title,
    date: post.node.frontmatter.publishedDate,
    slug: post.node.fields.slug,
  }));

  //grab the array of contentful posts from the post query {allContentfulBlogPost: { edges: [post1, post2, etc] }}
  //map over array of posts and return only the title, date and slug
  const contentfulPostArray = allPostsQuery.allContentfulBlogPost.edges.map(
    post => ({
      title: post.node.title,
      date: post.node.publishedDate,
      slug: post.node.slug,
    })
  );

  // return the contentful post array and markdown post array together sorted by date
  return [...contentfulPostArray, ...markdownPostArray].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
};

export default useAllPostsNodeData;
