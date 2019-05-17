import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => (
  <div>
    <Layout>
      <h1>Contact</h1>
      <h3>Ways To Contact</h3>
      <ul>
        <li>Email: aortizoj15(at)gmail(dot)com</li>
        <li>Instagram: @aortiz.123</li>
        <li>
          Twitter:{' '}
          <a href="https://twitter.com/aortizoj123" target="_blank">
            @aortizoj123
          </a>
        </li>
      </ul>
      <h4>Feel free to contact me regarding anything!</h4>
    </Layout>
  </div>
);

export default ContactPage;
