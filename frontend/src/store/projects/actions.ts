import { IStore } from "./../interfaces";
import axios from "axios";
import { Dispatch } from "redux";
import { IProject } from "./../../components/ProjectsList/interfaces";

export enum ProjectsAction {
  SET_PROJECTS = "PROJECTS::SET_PROJECTS",
  ADD_PROJECT = "PROJECTS::ADD_PROJECT",
  DELETE_PROJECT = "PROJECTS::DELETE_PROJECT",
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
