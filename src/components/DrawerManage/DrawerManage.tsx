import { Avatar, Sidebar } from "flowbite-react";
import { HiChartPie, HiTable, HiViewBoards } from "react-icons/hi";
import AvatarImage from "../../assets/img/avatar.png";
import { Dispatch, SetStateAction } from "react";

type Props = {
    nav: Dispatch<SetStateAction<string>>;
}


function DrawerManage({nav} : Props) {
  return (
    <div>
    <Sidebar aria-label="Sidebar with content separator example" className="h-screen">
      <Sidebar.Items>
      <Avatar img={AvatarImage} alt="avatar of Jese" rounded size="lg" />
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie} onClick={() => nav("manage")}>
            Gestion de Proyectos
          </Sidebar.Item>
          
          <Sidebar.Item  icon={HiTable} onClick={() => nav("donated")}>
            Proyectos Donados
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiViewBoards} onClick={() => nav("activity")}>
            Actividad
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
      </div>
  )
}

export default DrawerManage