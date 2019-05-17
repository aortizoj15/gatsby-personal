import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const IndexPage = () => (
  <div>
    <Header />
    <h1>Hello.</h1>
    <h2>
      My name is Alexis Ortiz Ojeda, a full-stack developer from Santa Cruz.
    </h2>
    <p>
      Need a developer? <Link to="/contact">Contact me.</Link>
    </p>
    <Footer />
  </div>
);

export default IndexPage;
