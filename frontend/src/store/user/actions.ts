import { IStore } from "./../interfaces";
import axios from "axios";
import { Dispatch } from "redux";
import { IUser } from "./interfaces";

export enum UserActionsType {
  SET_USER = "USER::SET_USER",
  DELETE_USER = "USER::DELETE_USER",
}

export const setUser = (user: IUser) => ({
  type: UserActionsType.SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: UserActionsType.DELETE_USER,
  payload: null,
});

export const updateUserDB: any =
  () => async (dispatch: Dispatch, getState: () => IStore) => {
    const user_id = getState().user.user?.id;

    await axios
      .get(`/api/users/${user_id}`)
      .then((res) => dispatch(setUser(res.data)));
  };
