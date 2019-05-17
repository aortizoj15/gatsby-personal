import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => (
  <div>
    <Layout>
      <h1>Hello.</h1>
      <h2>
        My name is Alexis Ortiz Ojeda, a full-stack developer from Santa Cruz.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  </div>
);

export default IndexPage;
