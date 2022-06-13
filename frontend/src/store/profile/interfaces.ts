import { IUser } from "./../user/interfaces";
import { ProfileActions } from "./actions";

export interface IProfile {
  user_id: number;
  created_at: string;
  image: null | string;
}

export interface IProfileState {
  profile: IProfile | null;
  selectedUser: IUser | null;
}

interface ISetProfile {
  type: ProfileActions.SET_PROFILE;
  payload: IProfile;
}

interface ISetSelectedUser {
  type: ProfileActions.SET_SELECTED_USER;
  payload: IUser;
}

export type ProfileAction = ISetProfile | ISetSelectedUser;
