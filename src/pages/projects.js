import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import ProjectCard from '../components/projectCard';
import projectStyles from './projects.module.scss';

const ProjectsPage = () => (
  <div>
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <div className={projectStyles.projectsContainer}>
        <ProjectCard
          title="c0d3"
          paragraph="Platform Creating Great Software Engineers"
          imgUrl="https://i.ibb.co/3CVmyLC/c0d3-meta.png"
          codeUrl="https://github.com/garageScript/c0d3-app"
          demoUrl="https://www.c0d3.com/"
        />
        <ProjectCard
          title="Peloton Van"
          paragraph="Web Application allowing managers to upload van inventory files and make them available to drivers via QR code"
          imgUrl="https://i.ibb.co/C0ywqGX/peloton-logo.png"
          codeUrl="https://github.com/aortizoj15/peloton-nextjs"
          demoUrl="https://peloton-nextjs.vercel.app/"
        />
        <ProjectCard
          title="Personal Blog"
          paragraph="Minimalist Easy to Read Blog"
          imgUrl="https://i.ibb.co/dbbL2dG/blog-logo.png"
          codeUrl="https://github.com/aortizoj15/nextjs-blog"
          demoUrl="https://alexisortizojeda-blog.vercel.app/"
        />
        <ProjectCard
          title="Leslie Colon"
          paragraph="Portfolio Website for On-Camera Host and Writer Leslie Colon"
          imgUrl="https://i.ibb.co/S089ZFv/Leslie-Logo.png"
          codeUrl="https://github.com/aortizoj15/leslie-gatsby"
          demoUrl="https://thelesliecolon.com/"
        />
        <ProjectCard
          title="EC Synthetic Services"
          paragraph="Business Brochure for Home Refinishing Company"
          imgUrl="https://i.ibb.co/GsZr8KP/ec-services-logo.jpg"
          codeUrl="https://github.com/aortizoj15/ecss-spa"
          demoUrl="https://ecsyntheticservices.com/"
        />
        <ProjectCard
          title="Movie Wars"
          paragraph="App Used to Compare Movies Side by Side"
          imgUrl="https://i.ibb.co/51f4r63/clapper-logo.jpg"
          codeUrl="https://github.com/aortizoj15/movie-wars"
          demoUrl="https://aortizoj15.github.io/movie-wars/"
        />
      </div>
    </Layout>
  </div>
);

export default ProjectsPage;
