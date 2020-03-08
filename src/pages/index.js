import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import AutoTypeHome from '../components/AutoTypeHome';

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <AutoTypeHome />
    <section className="about">
      <h2>About Me</h2>
      <p>
        As seen above, my name is Alexis Ortiz Ojeda. I am a full-stack
        developer residing in San Jose, CA. I attended the University of
        California Santa Cruz and received a degree in Computer Networking and
        Digital Technology. While in college, I found my passion for making
        websites and have continued to improve my skills every day. I am 23 and
        married to a wonderful woman. When I am not programming, I am making rap
        beats, reading books, or listening to podcasts.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
