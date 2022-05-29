import { IUser } from "./interfaces";

export enum UserActionsType {
  SET_USER = "USER::SET_USER",
}

export const setUser = (user: IUser) => ({
  type: UserActionsType.SET_USER,
  payload: user,
});
