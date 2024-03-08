import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ITripStore {
  createTravelPK: number;
  setCreateTravelPK: (isLogin: number) => void;
}

const tripStore = create(
  persist<ITripStore>(
    (set, get) => ({
      createTravelPK: 0,
      setCreateTravelPK: (createTravelPK: number) =>
        set({ createTravelPK: createTravelPK })
    }),
    {
      name: 'tripStorage'
    }
  )
);

export default tripStore;
