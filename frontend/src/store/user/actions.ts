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
