import { IStore } from "./../interfaces";

export const selectUser = (store: IStore) => store.user.user;
export const selectAuth = (store: IStore) => store.user.isAuth;
export const selectUserId = (store: IStore) => store.user.user?.id;
