export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface IState {
  user: IUser | null;
  isAuth: boolean;
}

export interface ISetUser {
  type: string;
  payload: IUser;
}

export type Action = ISetUser;
