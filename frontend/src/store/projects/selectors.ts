import { IStore } from "./../interfaces";

export const selectProjects = (store: IStore) => store.projects.projects;
export const selectTodos = (store: IStore) => store.projects.todos;
