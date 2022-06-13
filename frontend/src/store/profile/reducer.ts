import { ProfileActions } from "./actions";
import { IProfileState, ProfileAction } from "./interfaces";

const initState: IProfileState = {
  profile: null,
  selectedUser: null,
  avatar: "",
};

export const profileReducer = (
  state = initState,
  { type, payload }: ProfileAction
): IProfileState => {
  switch (type) {
    case ProfileActions.SET_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    case ProfileActions.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: payload,
      };

    case ProfileActions.SET_AVATAR:
      return {
        ...state,
        avatar: payload,
      };

    default:
      return state;
  }
};
