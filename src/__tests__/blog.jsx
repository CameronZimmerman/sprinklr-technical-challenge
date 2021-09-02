import React from "react";
import TestRenderer from "react-test-renderer";
import BlogPage from "../pages/blog.js";

describe("Blog Page", () => {
  it("creates blog page correctly", () => {
    const testRenderer = TestRenderer.create(<BlogPage />);
    const blogTestInstance = testRenderer.root;
    console.log(blogTestInstance);
  });
});
