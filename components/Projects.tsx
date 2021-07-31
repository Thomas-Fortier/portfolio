// Types & Interfaces
import { Button, ButtonGroup } from '@material-ui/core';
import Link from 'next/link';
import ProjectType from '../lib/types/Project';
import ProjectProps from '../lib/props/ProjectProps';
import Home from '../pages';

// Styles
import styles from '../styles/Projects.module.css';

function Projects({ projects }: ProjectProps) {
  console.log(projects);
  
  return (
    <section>
      <div className={`${styles.textContainer}`}>
        <h2 className={`${styles.title}`}>Projects</h2>
        <p className={`${styles.description}`}>
          Check out my projects on GitHub!
        </p>
      </div>
      <div className={`${styles.projectsContainer}`}>
        <section className={`${styles.projects}`}>
          {
            projects.map(project => {
              return (
                <div className={`${styles.project}`} key={project.name}>
                  <h3 className={`${styles.name}`}>{project.name}</h3>
                  <div className={`${styles.content}`}>
                    <p>{project.description}</p>
                    <p>Created on <span>{project.created_at}</span></p>
                    {getLanguageStyling(project.language)}

                    <div className={`${styles.buttons}`}>
                      {getExternalButtons(project)}
                    </div>
                  </div>
                </div>
              );
            })
          }
        </section>
      </div>
    </section>
  );
}

function getExternalButtons(project: ProjectType) {
  const websiteUrl = project.homepage;
  const sourceButton = <Button href={project.html_url} variant="contained" target="_blank">Source</Button>;
  const websiteButton = <Button href={websiteUrl} variant="contained" target="_blank">Website</Button>;

  if (!websiteUrl) {
    return sourceButton;
  }

  return (
    <ButtonGroup>
      {sourceButton}
      {websiteButton}
    </ButtonGroup>
  );
}

function getLanguageStyling(language: string) {
  let styling: any;

  switch(language) {
    case 'TypeScript':
      styling = styles.ts;
      break;
    case 'C#':
      styling = styles.cs;
      break;
    case 'JavaScript':
      styling = styles.js;
      break;
    default:
      styling = styles.default;
  }

  return <p>Language: <span className={styling}>{language}</span></p>;
}

export default Projects;
