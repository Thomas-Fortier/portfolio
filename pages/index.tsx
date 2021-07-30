// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import ProjectProps from '../lib/types/ProjectProps';
import { NextPage } from 'next';
import Footer from '../components/Footer';

// Styles
import 'bootstrap/dist/css/bootstrap.css';

const Home: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <>
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
