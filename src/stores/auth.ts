import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type State = {
  isLogin: boolean;
};

export type Actions = {
  login: (isLogin: boolean) => void;
  logout: (isLogin: boolean) => void;
};

const useUserIdStore = create<Actions & State>()(
  persist(
    (set, get) => ({
      isLogin: false,
      login: () => set({ isLogin: true }),
      logout: () => set({ isLogin: false })
    }),
    {
      name: 'userLogin'
    }
  )
);

export default useUserIdStore;
