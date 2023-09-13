import { Project } from "../types/project";

export const filterProjects = (projects: Project[], filters: string[]): Project[] => {
    if (filters.length === 0) {
      return projects;
    }
    // Use the filter method to create a new array of projects that match the filter criteria
    const filteredProjects = projects.filter((project) => {
      // check if project tags includes all filters
        return filters.every((filter) => project.techs.includes(filter));
    });
  
    return filteredProjects;
  }