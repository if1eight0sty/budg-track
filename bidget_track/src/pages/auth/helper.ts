import { NavigateFunction } from "react-router-dom";
import {
  ILoginData,
  ILoginDataError,
  IRegisterData,
  IRegisterDataError,
} from "./interface";

export class AuthHelper {
  checkLoginData = (data: ILoginData) => {
    const error: ILoginDataError = {} as ILoginDataError;
    error.email = !data.email ? "Email is required" : "";
    error.password = !data.password ? "Password is required" : "";
    return error;
  };

  checkRegisterData = (data: IRegisterData) => {
    const error: IRegisterDataError = {} as IRegisterDataError;
    error.email = !data.email ? "Email is required" : "";
    error.password = !data.password ? "Password is required" : "";
    error.name = !data.name ? "Name is required" : "";
    return error;
  };

  login = (
    data: ILoginData,
    setError: (data: ILoginDataError) => void,
    clearData: () => void
  ) => {
    const error = this.checkLoginData(data);
    if (error.email || error.password) {
      setError(error);
      return;
    }
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];
    const user = users.find((user: IRegisterData) => user.email === data.email);
    if (!user) {
      setError({ email: "Email does not exist", password: "" });
      return;
    }
    if (user.password !== data.password) {
      setError({ password: "Password is incorrect", email: "" });
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    clearData();
    window.location.replace("/");
  };

  register = (
    data: IRegisterData,
    setError: (data: IRegisterDataError) => void,
    clearData: () => void,
    navigate: NavigateFunction
  ) => {
    const error = this.checkRegisterData(data);
    if (error.email || error.password || error.name) {
      setError(error);
      return;
    }
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];
    const user = users.find((user: IRegisterData) => user.email === data.email);
    if (user) {
      setError({ email: "Email already exists", password: "", name: "" });
      return;
    }
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    clearData();
    navigate("/login");
  };
}
