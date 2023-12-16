import { create } from "zustand";

export const useAuthStore = create((set) => ({
  loginData: {
    email: "",
    password: "",
  },
  setLoginData: (data) =>
    set((state) => ({
      loginData: {
        ...state.loginData,
        ...data,
      },
    })),
  loginDataError: {
    email: "",
    password: "",
  },
  setLoginDataError: (data) =>
    set((state) => ({
      loginDataError: {
        ...state.loginDataError,
        ...data,
      },
    })),
  registerData: {
    email: "",
    password: "",
    name: "",
  },
  setRegisterData: (data) =>
    set((state) => ({
      registerData: {
        ...state.registerData,
        ...data,
      },
    })),
  registerDataError: {
    email: "",
    password: "",
    name: "",
  },
  setRegisterDataError: (data) =>
    set((state) => ({
      registerDataError: {
        ...state.registerDataError,
        ...data,
      },
    })),
}));
