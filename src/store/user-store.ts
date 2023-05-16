"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user?: string;
  setUser: (user: string) => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage",
      skipHydration: true,
    }
  )
);

