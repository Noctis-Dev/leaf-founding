import { useAccount } from '@gear-js/react-hooks';
import Identicon from '@polkadot/react-identicon';
import { Dropdown } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
interface WalletProps{
    balance: {
        value: string;
        unit: string;
      } | undefined;
      address: string;
      name: string | undefined;
      onClick: () => void;
}

function Wallet({balance, address, name, onClick}: WalletProps) {

    const navigate = useNavigate();

    const handleManageProject = () => {
        navigate("/manage");
    }

    const { logout } = useAccount();

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="grid grid-cols-2 gap-2 flex items-right">
            <div className="grid grid-cols-2 gap-2 flex items-center flew-grow">
                <span className="text-white">{balance?.value}</span>
                <span className="text-white">{balance?.unit}</span>
            </div>
            <Dropdown
            label={<Identicon value={address} size={28} theme="polkadot" className=""/>}
            inline
            arrowIcon={false}
            > 
           <Dropdown.Header>
             <div className="grid grid-cols-2 gap-2 flex items-center">
                
             <Identicon value={address} size={28} theme="polkadot" />
             <span className="block text-sm" onClick={onClick}>{name}</span>
             </div>
           </Dropdown.Header>
           <Dropdown.Divider />
                <Dropdown.Item onClick={() => handleLogout()}>Sign out</Dropdown.Item>
                <Dropdown.Item onClick={handleManageProject}>Manage Project</Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export { Wallet }