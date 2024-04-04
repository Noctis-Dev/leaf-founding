import { useState } from "react";
import { Wallet } from "./Wallet";
import { Button } from "flowbite-react";
import { useApi, useAccount, useBalance, useBalanceFormat } from '@gear-js/react-hooks';
import { AccountsModal } from "./AccountsModal";

function Account() {
    const { isApiReady } = useApi();
    const { account, accounts } = useAccount();
    const { balance } = useBalance(account?.address);
    const { getFormattedBalance } = useBalanceFormat();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formattedBalance = isApiReady && balance ? getFormattedBalance(balance) : undefined;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {account ? (
                <Wallet balance={formattedBalance} address={account.address} name={account.meta.name} onClick={openModal}/>
            ) : (
                <Button onClick={openModal}>Conectar Wallet</Button>
            )}
            {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} show={isModalOpen} />}
        </>
    )
}

export { Account }