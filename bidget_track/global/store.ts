import { create } from "zustand";
import { AXIOS_AUTH } from "./axios-config";
import { IGlobalSTore, IUser } from "./interface";

export const useGlobalStore = create<IGlobalSTore>((set) => ({
  user: null,
  setUser: (user: IUser) => set({ user }),
  checkAuth: async () => {
    try {
      const res = await AXIOS_AUTH.get("/auth");
      set({ user: res.data });
    } catch (error) {
      throw new Error(error);
    }
  },
}));
