import { IProjectsState } from "./projects/interfaces";
import { IUserState } from "./user/interfaces";

export interface IStore {
  user: IUserState;
  projects: IProjectsState;
}
