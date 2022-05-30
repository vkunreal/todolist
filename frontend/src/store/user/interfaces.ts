export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface IUserState {
  user: IUser | null;
  isAuth: boolean;
}

interface ISetUser {
  type: string;
  payload: IUser;
}

interface IDeleteUser {
  type: string;
  payload: null;
}

export type Action = ISetUser | IDeleteUser;
