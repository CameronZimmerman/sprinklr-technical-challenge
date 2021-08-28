import React from 'react';
import { Link } from 'gatsby'

const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Posts will go here!</p>
      <p>Interested in my content, feel free to learn more <Link to="/about">about me</Link></p>
    </div>
  );
};

export default BlogPage;