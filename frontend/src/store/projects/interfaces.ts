import { ProjectsAction } from "./actions";

export interface IProject {
  id: number;
  last_update: number;
  name: string;
  description: string;
}

export interface ITodo {
  id: number;
  name: string;
  description: string;
  project_id: number;
}

export interface IProjectsState {
  projects: IProject[];
  todos: ITodo[];
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

interface ISetTodos {
  type: ProjectsAction.SET_TODOS;
  payload: ITodo[];
}

interface IAddTodo {
  type: ProjectsAction.ADD_TODO;
  payload: ITodo;
}

interface IDeleteTodo {
  type: ProjectsAction.DELETE_TODO;
  payload: number;
}

export type IProjectsAction =
  | ISetProjects
  | IAddProject
  | IDeleteProject
  | ISetTodos
  | IAddTodo
  | IDeleteTodo;
