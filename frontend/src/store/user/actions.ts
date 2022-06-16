import { useNavigate } from "react-router-dom";
import { updateProfileDB } from "./../profile/actions";
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

export const loginDB: any =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    await axios
      .post("/auth/login", { email, password })
      .then((res) => dispatch(setUser(res.data)));
  };

export const singupDB: any =
  (name: string, email: string, password: string) =>
  async (dispatch: Dispatch) => {
    await axios
      .post("/auth/registration", { name, email, password })
      .then((res) => dispatch(setUser(res.data)));
  };
