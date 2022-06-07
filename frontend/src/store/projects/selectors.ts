import { IStore } from "./../interfaces";

export const selectProjects = (store: IStore) => store.projects.projects;
