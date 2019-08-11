import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => (
  <div>
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>
        My name is Alexis Ortiz Ojeda, a software developer from San Jose.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  </div>
);

export default IndexPage;
