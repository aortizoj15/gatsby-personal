import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import './header.module.scss';
import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/19Kjd7Sc2ZaMb9Sk4q2K7_zuZ78vtgmS63pa9xdRu4bA/edit?usp=sharing"
              target="_blank"
              className={headerStyles.navItem}
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className={headerStyles.icon}
              href="https://www.linkedin.com/in/alexis-ortiz-ojeda/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className={headerStyles.icon}
              href="https://github.com/aortizoj15"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
