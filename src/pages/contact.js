import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>cameronazimmerman@gmail.com</p>
      <p>
        See what I'm up to on <a href="https://twitter.com/CameronZimmer20" target="_blank">my twitter!</a>
      </p>
      <Footer />
    </div>
  );
};

export default ContactPage;