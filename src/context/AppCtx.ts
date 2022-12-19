import { createContext, useContext } from 'react';

export interface AppStateInterface {}

export interface AppCtxInterface {
  toggleTheme: () => void;
}

export const AppCtx = createContext<AppCtxInterface>({} as AppCtxInterface);

export const useAppCtx = () => useContext(AppCtx);
