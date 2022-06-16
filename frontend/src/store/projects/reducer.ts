import { ProjectsAction } from "./actions";
import { IProjectsAction, IProjectsState } from "./interfaces";

const initState: IProjectsState = {
  projects: [],
  todos: [],
};

export const projectsReducer = (
  state = initState,
  { type, payload }: IProjectsAction
): IProjectsState => {
  switch (type) {
    case ProjectsAction.SET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };

    case ProjectsAction.ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, payload],
      };

    case ProjectsAction.DELETE_PROJECT:
      const newProjects = state.projects.filter((proj) => proj.id !== payload);

      return {
        ...state,
        projects: newProjects,
      };

    case ProjectsAction.SET_TODOS:
      return {
        ...state,
        todos: payload,
      };

    case ProjectsAction.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case ProjectsAction.DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== payload);

      return {
        ...state,
        todos: newTodos,
      };

    default:
      return state;
  }
};
