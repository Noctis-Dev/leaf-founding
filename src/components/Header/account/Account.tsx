import { useState } from "react";
import { Wallet } from "./Wallet";
import { Button } from "flowbite-react";
import { AccountsModal } from "./AccountsModal";

function Account() {
   const accounts = [1,2,3,4,5,6,7,8,9,10];
   const account = false;
  const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {account ? (
                <Wallet balance={{unit: "", value: ""}} address={'202020020202'} name={'mane'} onClick={openModal}/>
            ) : (
                <Button onClick={openModal}>Conectar</Button>
            )}
            {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
        </>
    )
}

export { Account }