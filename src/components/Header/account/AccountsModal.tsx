import { Modal } from "flowbite-react";
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { Accounts } from "./Accounts";

type Props = {
    accounts: InjectedAccountWithMeta[] | undefined;
    close: () => void;
    show: boolean;
};

function AccountsModal({ accounts, close, show }: Props) {
    console.log(accounts)
    return (
        <Modal onClose={close} className="flex justify-center justify-items-center" show={show}>
            <Modal.Header>Accounts</Modal.Header>
            <Modal.Body>
            {accounts ? (
                <Accounts list={accounts} onChange={close} />
            ) : (
                <p>
                    Wallet extension was not found or disconnected. Please check how to install a supported wallet and create an
                    account
                    {' '}
                    <a href='https://wiki.gear-tech.io/docs/idea/account/create-account' target='_blank' rel='noreferrer'
                        className='link-text'>
                        here
                    </a>.
                </p>
            )}
            </Modal.Body>
        </Modal>
    )
}

export { AccountsModal }