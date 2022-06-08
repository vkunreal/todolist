import { IStore } from "./../interfaces";

export const selectProfile = (store: IStore) => store.profile.profile;
