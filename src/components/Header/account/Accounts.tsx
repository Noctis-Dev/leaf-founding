import { useAccount } from "@gear-js/react-hooks";
import { useAccountStore } from "../../../hooks/useAccountStore";
import { AccountsButton } from "./AccountsButton";
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';


type Props = {
    list: InjectedAccountWithMeta[];
    onChange: (account: InjectedAccountWithMeta) => void;
  };

function Accounts({ list, onChange }: Props) {
    const { login } = useAccount();
    const isAnyAccount = list.length > 0;
    const { setAccount } = useAccountStore() as { setAccount: (account: InjectedAccountWithMeta) => void };


    const handleLogin = (account: InjectedAccountWithMeta) =>  {
        login(account);
        setAccount(account);
        onChange(account);
    };

    const getAccounts = () => {
        return list.map((account) => {
            return (
                <li key={account.address} className="flex w-full">
                    <AccountsButton account={account} name={account.meta.name} onClick={() => handleLogin(account)}></AccountsButton>
                </li>
            )
        })
    };

    return isAnyAccount ? (
        <ul className="flex w-full grid grid-flow-row auto-rows-max">{getAccounts()}</ul>
    ): (
        <p>No accounts</p>
    )
}

export { Accounts }


