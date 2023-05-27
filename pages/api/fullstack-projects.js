import data from './fullstack-projects.json';

export const getFullStackProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getFullStackProjects();
  res.json(projects);
};
