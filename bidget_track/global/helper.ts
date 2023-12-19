import { IUserData } from "./../src/pages/budget/interface";
export class GlobalHelper {
  getUser = () => {
    const user: IUserData = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
    return user;
  };
}
