import { useAccount } from '@gear-js/react-hooks';
import { useEffect} from 'react';
import { WALLET_ID_LOCAL_STORAGE_KEY } from '../context/constContext';


function useWalletSync() {
  const { account, isAccountReady } = useAccount();
  const { address } = account || {};

  useEffect(() => {
    if (!isAccountReady) return;
    if (!account) return localStorage.removeItem(WALLET_ID_LOCAL_STORAGE_KEY);

    localStorage.setItem(WALLET_ID_LOCAL_STORAGE_KEY, account.meta.source);
  }, [isAccountReady, address, account]);
}

export { useWalletSync }; 