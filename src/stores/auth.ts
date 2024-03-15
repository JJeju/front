import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type State = {
  isLogin: boolean;
};

export type Actions = {
  setIsLogin: (isLogin: boolean) => void;
};

const useUserIdStore = create<Actions & State>()(
  persist(
    (set, get) => ({
      isLogin: false,
      setIsLogin: (newData: boolean) => set({ isLogin: newData })
    }),
    {
      name: 'userLogin'
    }
  )
);

export default useUserIdStore;
