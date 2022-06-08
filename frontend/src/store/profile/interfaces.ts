import { ProfileActions } from "./actions";

export interface IProfile {
  user_id: number;
  created_at: string;
  image: null | string;
}

export interface IProfileState {
  profile: IProfile | null;
}

interface ISetProfile {
  type: ProfileActions.SET_PROFILE;
  payload: IProfile;
}

export type ProfileAction = ISetProfile;
