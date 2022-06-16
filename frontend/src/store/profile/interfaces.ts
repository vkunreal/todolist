import { IUser } from "./../user/interfaces";
import { ProfileActions } from "./actions";

export interface IProfile {
  user_id: number;
  created_at: string;
}

export interface IProfileState {
  profile: IProfile | null;
  selectedUser: IUser | null;
  avatar: string;
}

interface ISetProfile {
  type: ProfileActions.SET_PROFILE;
  payload: IProfile;
}

interface ISetSelectedUser {
  type: ProfileActions.SET_SELECTED_USER;
  payload: IUser;
}

interface ISetAvatar {
  type: ProfileActions.SET_AVATAR;
  payload: string;
}

export type ProfileAction = ISetProfile | ISetSelectedUser | ISetAvatar;
