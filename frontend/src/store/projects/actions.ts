import { IStore } from "./../interfaces";
import { Dispatch } from "redux";
import { IProject, ITodo } from "./interfaces";
import axios from "axios";

export enum ProjectsAction {
  SET_PROJECTS = "PROJECTS::SET_PROJECTS",
  ADD_PROJECT = "PROJECTS::ADD_PROJECT",
  DELETE_PROJECT = "PROJECTS::DELETE_PROJECT",

  SET_TODOS = "PROJECTS::SET_TODOS",
  ADD_TODO = "PROJECTS::ADD_TODO",
  DELETE_TODO = "PROJECTS::DELETE_TODO",
}

const setProjects = (projects: IProject[]) => ({
  type: ProjectsAction.SET_PROJECTS,
  payload: projects,
});

const addProject = (project: IProject) => ({
  type: ProjectsAction.ADD_PROJECT,
  payload: project,
});

const deleteProject = (id: number) => ({
  type: ProjectsAction.DELETE_PROJECT,
  payload: id,
});

const setTodos = (todos: ITodo[]) => ({
  type: ProjectsAction.SET_TODOS,
  payload: todos,
});

const addTodo = (todo: ITodo) => ({
  type: ProjectsAction.ADD_TODO,
  payload: todo,
});

const deleteTodo = (id: number) => ({
  type: ProjectsAction.DELETE_TODO,
  payload: id,
});

export const updateProjectsDB: any =
  () => async (dispatch: Dispatch, getState: () => IStore) => {
    const user_id = getState().user.user?.id;

    await axios
      .get(`/api/projects/${user_id}`)
      .then((res) => dispatch(setProjects(res.data)));
  };

export const addProjectDB: any =
  (name: string, description: string) =>
  async (dispatch: Dispatch, getState: () => IStore) => {
    const user_id = getState().user.user?.id;

    await axios
      .post("/api/project", {
        user_id,
        project: { name, description },
      })
      .then((res) => dispatch(addProject(res.data[0])));
  };

export const deleteProjectDB: any =
  (id: number) => async (dispatch: Dispatch) => {
    await axios
      .delete(`/api/project/${id}`)
      .then(() => dispatch(deleteProject(id)));
  };

export const setTodosDB: any =
  (project_id: number) => async (dispatch: Dispatch) => {
    await axios
      .get(`/api/todos/${project_id}`)
      .then((res) => dispatch(setTodos(res.data)));
  };
