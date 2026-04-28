import { create } from 'zustand';

interface Credential {
  service: string;
  username: string;
  password: string;
  url: string;
  notes?: string;
}

interface Cost {
  service: string;
  amount: number;
  currency: string;
  renewalDate: string;
}

interface UserSettings {
  biometricAuth: boolean;
  autoLock: boolean;
  passwordExpiry: boolean;
  costAlerts: boolean;
}

interface AppState {
  credentials: Credential[];
  costs: Cost[];
  loading: boolean;
  userSettings: UserSettings;
  fetchCredentials: () => Promise<void>;
  fetchCosts: () => Promise<void>;
  updateSettings: (settings: UserSettings) => void;
}

const useStore = create<AppState>((set) => ({
  credentials: [],
  costs: [],
  loading: false,
  userSettings: {
    biometricAuth: false,
    autoLock: true,
    passwordExpiry: true,
    costAlerts: true
  },

  fetchCredentials: async () => {
    set({ loading: true });
    // In a real app, this would fetch from IndexedDB
    setTimeout(() => {
      set({
        credentials: [
          {
            service: "Google",
            username: "user@example.com",
            password: "********",
            url: "https://google.com"
          },
          {
            service: "GitHub",
            username: "devuser",
            password: "********",
            url: "https://github.com"
          }
        ],
        loading: false
      });
    }, 1000);
  },

  fetchCosts: async () => {
    set({ loading: true });
    // In a real app, this would fetch from IndexedDB
    setTimeout(() => {
      set({
        costs: [
          {
            service: "Netflix",
            amount: 12.99,
            currency: "USD",
            renewalDate: "2023-12-15"
          },
          {
            service: "Spotify",
            amount: 9.99,
            currency: "USD",
            renewalDate: "2023-11-25"
          }
        ],
        loading: false
      });
    }, 1000);
  },

  updateSettings: (settings) => {
    set({ userSettings: settings });
  }
}));

export default useStore;