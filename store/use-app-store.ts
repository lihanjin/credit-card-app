/**
 * 应用全局状态 Store
 */

import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark' | 'auto';
  language: 'en' | 'zh' | 'zh-TW';
  isFirstLaunch: boolean;
  notificationsEnabled: boolean;
}

interface AppActions {
  setTheme: (theme: AppState['theme']) => void;
  setLanguage: (language: AppState['language']) => void;
  setFirstLaunch: (isFirst: boolean) => void;
  toggleNotifications: () => void;
  reset: () => void;
}

type AppStore = AppState & AppActions;

const initialState: AppState = {
  theme: 'auto',
  language: 'en',
  isFirstLaunch: true,
  notificationsEnabled: true,
};

/**
 * 应用 Store
 */
export const useAppStore = create<AppStore>((set) => ({
  ...initialState,

  setTheme: (theme) => set({ theme }),

  setLanguage: (language) => set({ language }),

  setFirstLaunch: (isFirst) => set({ isFirstLaunch: isFirst }),

  toggleNotifications: () =>
    set((state) => ({
      notificationsEnabled: !state.notificationsEnabled,
    })),

  reset: () => set(initialState),
}));
