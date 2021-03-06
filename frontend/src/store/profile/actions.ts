import { IUser } from "./../user/interfaces";
import { updateUserDB } from "./../user/actions";
import axios from "axios";
import { IStore } from "./../interfaces";
import { Dispatch } from "redux";
import { IProfile } from "./interfaces";

export enum ProfileActions {
  SET_PROFILE = "PROFILES::SET_PROFILE",
  SET_SELECTED_USER = "PROFILES::SET_SELECTED_USER",
  SET_AVATAR = "PROFILES::SET_AVATAR",
}

const setProfile = (profile: IProfile) => ({
  type: ProfileActions.SET_PROFILE,
  payload: profile,
});

const setSelectedUser = (user: IUser) => ({
  type: ProfileActions.SET_SELECTED_USER,
  payload: user,
});

export const setAvatar = (image: string) => ({
  type: ProfileActions.SET_AVATAR,
  payload: image,
});

export const updateProfileDB: any =
  (id: number) => async (dispatch: Dispatch, getState: () => IStore) => {
    await axios
      .get(`/api/profile/${id}`)
      .then((res) => dispatch(setProfile(res.data)));
  };

export const changeProfile: any =
  (name: string, email: string) =>
  async (dispatch: Dispatch, getState: () => IStore) => {
    const user_id = getState().user.user?.id;

    await axios
      .post(`/api/profile/${user_id}`, { name, email })
      .then(() => dispatch(updateUserDB()));

    dispatch(setSelectedUserDB(user_id));
  };

export const setSelectedUserDB: any =
  (user_id: number) => async (dispatch: Dispatch) => {
    await axios
      .get(`/api/users/${user_id}`)
      .then((res) => dispatch(setSelectedUser(res.data)));
  };

export const setAvatarDB: any =
  (image: string) => async (dispatch: Dispatch, getState: () => IStore) => {
    const user_id = getState().user.user?.id;

    await axios
      .put(`/api/profile/image`, {
        user_id,
        image,
      })
      .then((res) => dispatch(setAvatar(res.data)));
  };

export const updateAvatarDB: any =
  () => async (dispatch: Dispatch, getState: () => IStore) => {
    const user_id = getState().profile.selectedUser?.id;

    await axios
      .get(`/api/profile/image/${user_id}`)
      .then((res) => dispatch(setAvatar(res.data)));
  };
