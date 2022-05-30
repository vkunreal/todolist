import { IStore } from "./../interfaces";

export const selectUser = (state: IStore) => state.user.user;

export const selectAuth = (state: IStore) => state.user.isAuth;
