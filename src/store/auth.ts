import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUseUserIdStore {
  isLogin: boolean;
  setUserId: (isLogin: boolean) => void;
}

const useUserIdStore = create(
  persist<IUseUserIdStore>(
    (set, get) => ({
      isLogin: false,
      setUserId: (isLogin: boolean) => set(() => ({ isLogin: isLogin }))
    }),
    {
      name: 'userIdStorage'
    }
  )
);

export default useUserIdStore;
