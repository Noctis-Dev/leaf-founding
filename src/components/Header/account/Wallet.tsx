import { Dropdown } from 'flowbite-react';



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

    const logout = () => {
        localStorage.removeItem('address')
        localStorage.removeItem('name')
        localStorage.removeItem('balance')
        window.location.reload()
    }
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
                label="Account"
                inline
                arrowIcon={false}
            >
                <Dropdown.Header>
                    <div className="grid grid-cols-2 gap-2 flex items-center">
                        <span className="text-white">{address}</span>
                        <span className="block text-sm" onClick={onClick}>{name}</span>
                    </div>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => handleLogout()}>Sign out</Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export { Wallet }