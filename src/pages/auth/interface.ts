export interface IUseAuthStore {
  loginData: ILoginData;
  setLoginData: (data: ILoginData) => void;
  clearLoginData: () => void;
  loginDataError: ILoginDataError;
  setLoginDataError: (data: ILoginDataError) => void;
  registerData: IRegisterData;
  setRegisterData: (data: IRegisterData) => void;
  clearRegisterData: () => void;
  registerDataError: IRegisterDataError;
  setRegisterDataError: (data: IRegisterDataError) => void;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginDataError {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
}

export interface IRegisterDataError {
  email: string;
  password: string;
  name: string;
}
