import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IUseUserIdStore {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export type { IUseUserIdStore };

const useUserIdStore = create(
  persist<IUseUserIdStore>(
    (set, get) => ({
      isLogin: false,
      setIsLogin: (isLogin: boolean) => set({ isLogin: isLogin })
    }),
    {
      name: 'userIdStorage'
    }
  )
);

export default useUserIdStore;
