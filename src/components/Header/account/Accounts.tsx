import { useAccountStore } from "../../../hooks/useAccountStore";
import { AccountsButton } from "./AccountsButton";

type Props = {
    list: number[];
    onChange: (account: number) => void;
  };

function Accounts({ list, onChange }: Props) {
    const isAnyAccount = list.length > 0;
    const { setAccount } = useAccountStore() as { setAccount: (account: number) => void };
    const { login } = useAccountStore() as { login: (account: number) => void };

    const handleLogin = (account: number) =>  {
        login(account);
        setAccount(account);
        onChange(account);
    };

    const getAccounts = () => {
        return list.map((account) => {
            return (
                <li key={''} className="flex w-full">
                    <AccountsButton account={account} name={'no'} onClick={() => handleLogin(account)}></AccountsButton>
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


