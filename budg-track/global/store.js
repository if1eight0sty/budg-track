import { create } from "zustand";
import { AXIOS_AUTH } from "./axios-config";

export const useGlobalStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  checkAuth: async () => {
    try {
      const res = await AXIOS_AUTH.get("/auth");
      set({ user: res.data });
    } catch (error) {
      throw new Error(error);
    }
  },
}));
