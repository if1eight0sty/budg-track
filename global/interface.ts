export interface IGlobalSTore {
  user: IUser | null;
  setUser: (user: IUser) => void;
  checkAuth: () => Promise<void>;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
}
