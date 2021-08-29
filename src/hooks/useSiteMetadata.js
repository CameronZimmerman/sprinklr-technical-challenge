import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  //static query to grab site metadata
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            author
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
