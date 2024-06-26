import { Balance } from '@polkadot/types/interfaces';
declare function useBalance(address: string | undefined): {
    balance: Balance | undefined;
    isBalanceReady: boolean;
};
export { useBalance };