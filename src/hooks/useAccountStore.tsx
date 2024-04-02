import { create } from "zustand";
import { Account } from '@gear-js/react-hooks';


export const useAccountStore = create((set) => ({
    account: null as Account | null,
    setAccount: (account: Account | null) => set({ account }),
}));