import { ProjectsAction } from "./actions";
import { IProjectsAction, IProjectsState } from "./interfaces";

const initState: IProjectsState = {
  projects: [],
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

    default:
      return state;
  }
};
