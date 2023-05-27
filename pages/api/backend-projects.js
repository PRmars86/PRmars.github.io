import data from './backend-projects.json';

export const getBackEndProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getBackEndProjects();
  res.json(projects);
};
