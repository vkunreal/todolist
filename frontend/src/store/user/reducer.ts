import { UserActionsType } from "./actions";
import { Action, IUserState } from "./interfaces";

const initState: IUserState = {
  user: null,
  isAuth: false,
};

export const userReducer = (
  state: IUserState = initState,
  { type, payload }: Action
): IUserState => {
  switch (type) {
    case UserActionsType.SET_USER:
      return {
        ...state,
        user: payload,
        isAuth: true,
      };

    case UserActionsType.DELETE_USER:
      return {
        ...state,
        user: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
