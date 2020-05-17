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
      {/* <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1> */}
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
              href="https://drive.google.com/open?id=1HoMg9QHGH2qicG8bZ8hRWv7FT7GXjFB5"
              className={headerStyles.navItem}
            >Resume</a>
          </li>
          <li>
            <a
              className={headerStyles.icon}
              href="https://www.linkedin.com/in/alexis-ortiz-ojeda/"
            >
              <FaLinkedin />
            </a>
            <a
              className={headerStyles.icon}
              href="https://github.com/aortizoj15"
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
