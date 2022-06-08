import { updateUserDB } from "./../user/actions";
import axios from "axios";
import { IStore } from "./../interfaces";
import { Dispatch } from "redux";
import { IProfile } from "./interfaces";

export enum ProfileActions {
  SET_PROFILE = "PROFILES::SET_PROFILE",
}

const setProfile = (profile: IProfile) => ({
  type: ProfileActions.SET_PROFILE,
  payload: profile,
});

export const updateProfileDB: any =
  () => async (dispatch: Dispatch, getState: () => IStore) => {
    const user_id = getState().user.user?.id;

    await axios
      .get(`/api/profile/${user_id}`)
      .then((res) => dispatch(setProfile(res.data)));
  };

export const changeProfile: any =
  (name: string, email: string) =>
  async (dispatch: Dispatch, getState: () => IStore) => {
    const user_id = getState().user.user?.id;

    await axios
      .post(`/api/profile/${user_id}`, { name, email })
      .then(() => dispatch(updateUserDB()));
  };
