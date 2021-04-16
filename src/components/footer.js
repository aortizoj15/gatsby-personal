import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';

const year = new Date().getFullYear();

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <div>
      <footer className={footerStyles.footer}>
        <p>
          Created by {data.site.siteMetadata.author}, © {year}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
