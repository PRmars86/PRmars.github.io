import ProjectCard from '../components/ProjectCard';
import { getFrontEndProjects } from './api/frontend-projects';
import { getBackEndProjects } from './api/backend-projects';
import { getFullStackProjects } from './api/fullstack-projects';
import { getMiscProjects } from './api/misc-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ frontend_projects, backend_projects, fullstack_projects, misc_projects }) => {
  return (
    <>
      <h3>Open Source Projects</h3>
      <br />
      <center><h4>Front-End</h4></center>
      <hr />
      <div className={styles.container}>
        {frontend_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />
      <center><h4>Back-end</h4></center>
      <hr />
      <div className={styles.container}>
        {backend_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />
      <center><h4>Full-stack</h4></center>
      <hr />
      <div className={styles.container}>
        {fullstack_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />
      <center><h4>Other Projects</h4></center>
      <hr />
      <div className={styles.container}>
        {misc_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const frontend_projects = getFrontEndProjects();
  const backend_projects = getBackEndProjects();
  const fullstack_projects = getFullStackProjects();
  const misc_projects = getMiscProjects();

  return {
    props: { title: 'Projects', frontend_projects, backend_projects, fullstack_projects, misc_projects },
  };
}

export default ProjectsPage;
