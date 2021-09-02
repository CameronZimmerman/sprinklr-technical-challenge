const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn().mockImplementation(() => ({
    data: {
      allContentfulBlogPost: {
        edges: [{ slug: "ContentfulTest1" }, { slug: "ContentfulTest2" }],
      },
      allMarkdownRemark: {
        edges: [
          { fields: { slug: "MarkdownTest1" } },
          { fields: { slug: "MarkdownTest2" } },
        ],
      },
    },
  })),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Test Title",
        author: "Test Author",
      },
    },
    allContentfulBlogPost: {
      edges: [
        {
          node: {
            title: "Test 1 Contentful",
            slug: "ContentfulTest1",
            publishedDate: "2021-09-01",
          },
        },
        {
          node: {
            title: "Test 2 Contentful",
            slug: "ContentfulTest2",
            publishedDate: "2021-09-02",
          },
        },
      ],
    },
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              title: "Test 1 Markdown",
              publishedDate: "2021-09-01",
            },
            fields: {
              slug: "MarkdownTest1",
            },
          },
        },
        {
          node: {
            frontmatter: {
              title: "Test 2 Markdown",
              publishedDate: "2021-09-01",
            },
            fields: {
              slug: "MarkdownTest2",
            },
          },
        },
      ],
    },
  })),
  Link: jest
    .fn()
    .mockImplementation(
      ({
        activeClassName,
        activeStyle,
        getProps,
        innerRef,
        partiallyActive,
        ref,
        replace,
        to,
        ...rest
      }) =>
        React.createElement("a", {
          ...rest,
          href: to,
        })
    ),
};
