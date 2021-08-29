import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
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
