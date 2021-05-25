import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => (
  <div>
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <h3>Ways To Contact</h3>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:aortizoj15@gmail.com">aortizoj15@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/alexis-ortiz-ojeda/"
            target="_blank"
            rel="noreferrer"
          >
            /in/alexis-ortiz-ojeda/
          </a>
        </li>
        <li>
          <strong>Twitter:</strong>{' '}
          <a
            href="https://twitter.com/aortizoj123"
            target="_blank"
            rel="noreferrer"
          >
            @aortizoj123
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/aortizoj15"
            target="_blank"
            rel="noreferrer"
          >
            aortizoj15
          </a>
        </li>
        <li>
          <strong>Dev.to:</strong>{' '}
          <a href="https://dev.to/aortizoj15" target="_blank" rel="noreferrer">
            /aortizoj15
          </a>
        </li>
      </ul>
      <h4>
        Feel free to contact me if you have any questions or if you simply need
        a friend to talk to!{' '}
      </h4>
    </Layout>
  </div>
);

export default ContactPage;
