// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Metatags from '../components/Metatags';
import Footer from '../components/Footer';

import ProjectProps from '../lib/props/ProjectProps';
import { NextPage } from 'next';

// Styles
import 'bootstrap/dist/css/bootstrap.css';

const Home: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <>
      <Metatags
        title={'Thomas Fortier - Portfolio'}
        description={
          'Hey there! My name is Thomas and I am currently a computer science student at John Abbott College in Montreal, QC. I am an aspiring software engineer and strive to learn as much as possible within the realm of computer science.'
        }
        image={'../public/page_image.png'}
      />
      <Header />
      <Hero />
      <Projects projects={projects}/>
      <Footer />
    </>
  )
}


Home.getInitialProps = async (context) => {
  const response = await fetch('https://api.github.com/users/Thomas-Fortier/repos');
  const projects = await response.json();

  return {
    projects
  }
}


export default Home;
