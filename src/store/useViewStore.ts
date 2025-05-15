import { create } from "zustand";

// Define the possible views as a TypeScript union type
export type ViewState = "dashboard" | "detail" | "edit";

// Define the store's shape
interface ViewStore {
  view: ViewState;
  setView: (view: ViewState) => void;
}

// Create the Zustand store
export const useViewStore = create<ViewStore>((set) => ({
  view: "dashboard", // default state
  setView: (view) => set({ view }),
}));
