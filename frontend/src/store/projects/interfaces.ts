import { ProjectsAction } from "./actions";
import { IProject } from "./../../components/ProjectsList/interfaces";

export interface IProjectsState {
  projects: IProject[];
}

interface ISetProjects {
  type: ProjectsAction.SET_PROJECTS;
  payload: IProject[];
}

interface IAddProject {
  type: ProjectsAction.ADD_PROJECT;
  payload: IProject;
}

interface IDeleteProject {
  type: ProjectsAction.DELETE_PROJECT;
  payload: number;
}

export type IProjectsAction = ISetProjects | IAddProject | IDeleteProject;
