import data from './frontend-projects.json';

export const getFrontEndProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getFrontEndProjects();
  res.json(projects);
};
