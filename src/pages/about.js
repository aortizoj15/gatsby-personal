import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => (
  <div>
    <Header />
    <h1>About</h1>
    <p>
      Hello my name is Alexis Ortiz Ojeda and I am a full-stack developer
      residing in Santa Cruz, CA. I attended university here at the University
      of California Santa Cruz and received a degree in Computer Networking and
      Digital Media. I am 22 and married to a wonderful woman. When I am not
      programming, I am making rap beats.
    </p>
    <p>
      Want to work with me? <Link to="/contact">Reach out.</Link>
    </p>
    <Footer />
  </div>
);

export default AboutPage;
