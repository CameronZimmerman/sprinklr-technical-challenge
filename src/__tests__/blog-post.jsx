import React from "react";
import TestRenderer from "react-test-renderer";
import Blog from "../templates/blog.js";

//our test is unable to access the page context where our query lives, so we will manually pass this down as props
const fakePageData = {
  contentfulBlogPost: {
    title: "Test 1 Contentful",
    publishedDate: "2021-09-01",
    body: {
      raw: `{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Test Contentful Post!","marks":[],"data":{}}],"data":{}},{"nodeType":"heading-2","content":[{"nodeType":"text","value":"With Headings!","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"i'm so excited. ","marks":[{"type":"italic"}],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"","marks":[],"data":{}}],"data":{}}]}`,
    },
  },
  markdownRemark: {
    fields: {
      slug: "MarkdownTest1",
    },
    frontmatter: {
      title: "Test 1 Markdown",
      publishedDate: "2021-09-01",
    },
    html: "<p>Test</p>",
  },
};

describe("Blog Page", () => {
  it("renders blog post correctly", () => {
    const testRenderer = TestRenderer.create(<Blog data={fakePageData} />);
    const blogPostTestInstance = testRenderer.toJSON();
    expect(blogPostTestInstance).toMatchSnapshot();
  });
});
