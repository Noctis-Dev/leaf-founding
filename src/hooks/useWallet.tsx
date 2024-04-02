import { useAccount } from '@gear-js/react-hooks';
import { useState } from 'react';
import { WALLET, WALLET_ID_LOCAL_STORAGE_KEY } from '../context/constContext';
import { WalletId } from '../utils/types';


function useWallet() {
    const { accounts } = useAccount();
  
    const [walletId, setWalletId] = useState(
      (localStorage.getItem(WALLET_ID_LOCAL_STORAGE_KEY) as WalletId | null) || undefined,
    );
  
    const wallet = walletId ? WALLET[walletId] : undefined;
  
    const getWalletAccounts = (id: WalletId) => accounts?.filter(({ meta }) => meta.source === id);
    const walletAccounts = walletId ? getWalletAccounts(walletId) : undefined;
  
    const resetWalletId = () => setWalletId(undefined);
  
    return {
      wallet,
      walletAccounts,
      setWalletId,
      resetWalletId,
      getWalletAccounts,
    };
}


  export { useWallet };
  