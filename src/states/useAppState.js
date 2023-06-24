import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppState = create(
  persist(
    (set) => ({
      // Define your state here
      clr: "blue",
      toggleColor: () =>
        set((state) => {
          const clrs = ["blue", "grey", "purple"];
          const currentIndex = clrs.indexOf(state.clr);
          const nextIndex = (currentIndex + 1) % clrs.length;
          return { clr: clrs[nextIndex] };
        }),
    }),
    {
      name: "app-state", // Name for the persistent storage
      getStorage: () => localStorage, // Storage method (can be sessionStorage or a custom storage)
    }
  )
);

export default useAppState;
