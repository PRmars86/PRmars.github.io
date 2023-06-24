import data from './ml.json';

export const getMLProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getMLProjects();
  res.json(projects);
};
