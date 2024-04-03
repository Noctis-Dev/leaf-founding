import { Navbar } from 'flowbite-react';
import { Account } from './account/Account';
import logo from "../../assets/img/LogitoGod.svg"

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <Navbar fluid rounded className='bg-gray-800'>
      <Navbar.Brand href="https://flowbite-react.com">

        <img  src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white">Leaf Founding</span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-right">
        {isAccountVisible && <Account />}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='justify-end'>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/create">
            Crear Proyecto          
        </Navbar.Link>
        <Navbar.Link href="/all">Todos los proyectos</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header