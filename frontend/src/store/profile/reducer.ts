import { ProfileActions } from "./actions";
import { IProfileState, ProfileAction } from "./interfaces";

const initState: IProfileState = {
  profile: null,
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

    default:
      return state;
  }
};
