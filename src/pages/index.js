import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import AutoTypeHome from '../components/AutoTypeHome';
import indexStyles from './index.module.scss'
import SimpleList from '../components/list'

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <div className={indexStyles.autoType}>
      <AutoTypeHome />
    </div>
    <section className={indexStyles.section}>
      <h1 className={indexStyles.heading}>Skills I Learned</h1>
      <div className={indexStyles.listContainer}>
        <SimpleList 
          title='Languages' 
          items={['JavaScript', 'TypeScript']}/>
        <SimpleList 
          title='Front End' 
          items={['React', 'Sass', 'Apollo Client', 'Next.js', 'Gatsby']}/>
        <SimpleList 
          title='Backend' 
          items={['GraphQL', 'Node.js', 'RESTful Api', 'Express.js', 'Apollo Server']}/>
        <SimpleList 
          title='Database' 
          items={['MongoDB', 'Firebase', 'PostgreSQL', 'MySQL']}/>
        <SimpleList 
          title='Tooling' 
          items={['Jest', 'React Testing Library', 'Git', 'Agile', 'Markdown']}/>
      </div>
    </section>
    <section className={indexStyles.section}>
      <h1 className={indexStyles.heading}>Little About Myself</h1>
      <p className={indexStyles.paragraph}>
        As seen above, my name is Alexis Ortiz Ojeda. I am a full-stack
        developer residing in San Jose, CA. I attended the University of
        California Santa Cruz and received a degree in Computer Networking and
        Digital Technology. 
      </p>
      <p className={indexStyles.paragraph}>
        While in college, I found my passion for making
        websites and have continued to improve my skills every day. I am 23 and
        married to a wonderful woman. When I am not programming, I am making rap
        beats, reading books, or listening to podcasts.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
