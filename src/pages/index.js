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
        My name is Alexis Ortiz Ojeda, a software developer residing in San
        Jose.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <div className="card">
        <div className="card-container">
          <h4>
            <b>YelpCamp</b>
          </h4>
          <p>Authenticates users and allows CRUD functionality</p>
        </div>
      </div>
    </Layout>
  </div>
);

export default IndexPage;
