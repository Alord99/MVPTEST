import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Subscription, StreamingService } from './types';

interface AppState {
  // User's active streaming services
  activeServices: string[];
  addService: (serviceId: string) => void;
  removeService: (serviceId: string) => void;
  
  // Subscriptions
  subscriptions: Subscription[];
  addSubscription: (sub: Subscription) => void;
  removeSubscription: (id: string) => void;
  
  // Current tab
  currentTab: 'discover' | 'subscriptions';
  setCurrentTab: (tab: 'discover' | 'subscriptions') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      activeServices: ['netflix', 'hulu'],
      addService: (serviceId) =>
        set((state) => ({
          activeServices: [...new Set([...state.activeServices, serviceId])],
        })),
      removeService: (serviceId) =>
        set((state) => ({
          activeServices: state.activeServices.filter((id) => id !== serviceId),
        })),
      
      subscriptions: [],
      addSubscription: (sub) =>
        set((state) => ({
          subscriptions: [...state.subscriptions, sub],
        })),
      removeSubscription: (id) =>
        set((state) => ({
          subscriptions: state.subscriptions.filter((s) => s.id !== id),
        })),
      
      currentTab: 'discover',
      setCurrentTab: (tab) => set({ currentTab: tab }),
    }),
    {
      name: 'stream-hub-storage',
    }
  )
);

