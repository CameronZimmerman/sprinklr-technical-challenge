import React from 'react';
import { Link } from 'gatsby'
import Header from '../components/header.js';
import Footer from '../components/footer.js';

const BlogPage = () => {
  return (
    <div>
      <Header />
      <h1>Blog</h1>
      <p>Posts will go here!</p>
      <p>Interested in my content, feel free to learn more <Link to="/about">about me</Link></p>
      <Footer />
    </div>
  );
};

export default BlogPage;