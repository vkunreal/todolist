import { UserActionsType } from "./actions";
import { Action, IState } from "./interfaces";

const initState: IState = {
  user: null,
  isAuth: false,
};

export const userReducer = (
  state: IState = initState,
  { type, payload }: Action
): IState => {
  switch (type) {
    case UserActionsType.SET_USER:
      return {
        ...state,
        user: payload,
        isAuth: true,
      };

    default:
      return state;
  }
};
