import { IStore } from "./../interfaces";

export const selectProfile = (store: IStore) => store.profile.profile;
export const selectSelectedUser = (store: IStore) => store.profile.selectedUser;
export const selectAvatar = (store: IStore) => store.profile.avatar;
