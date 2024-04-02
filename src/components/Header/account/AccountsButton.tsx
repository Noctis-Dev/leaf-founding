import { Button } from "flowbite-react";


type Props = {
    account: number;
    name: string | undefined;
    onClick: () => void;
  };

function AccountsButton({ account, name, onClick}: Props) {
    return (
    <>
        <Button onClick={onClick} className="mt-2 w-full flex items-center justify-start space-x-4 bg-emerald-800 text-white" color="succes">
            <Button value={account} size={28} />
            <h1 className="flex-grow ml-5">{name}</h1>
        </Button>
      </>
    )
}

export { AccountsButton }