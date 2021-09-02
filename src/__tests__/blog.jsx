import React from "react";
import TestRenderer from "react-test-renderer";
import BlogPage from "../pages/blog.js";

describe("Blog Page", () => {
  it("renders blog page correctly", () => {
    const testRenderer = TestRenderer.create(<BlogPage />);
    const blogTestInstance = testRenderer.toJSON();
    expect(blogTestInstance).toMatchSnapshot();
  });
});
