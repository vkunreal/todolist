export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface IUserState {
  user: IUser | null;
  isAuth: boolean;
}

export interface ISetUser {
  type: string;
  payload: IUser;
}

export type Action = ISetUser;
