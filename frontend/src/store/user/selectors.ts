import { IState } from "./interfaces";

export const selectUser = (state: IState) => state.user;

export const selectAuth = (state: IState) => state.isAuth;
