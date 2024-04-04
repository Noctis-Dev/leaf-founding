import { Dispatch, SetStateAction } from "react";
import CardManage from "../../components/Cards/CardManage";

type Props = {
    nav: Dispatch<SetStateAction<string>>;
  };



function GridCards({nav}: Props) {
    const text1 =
    "Leef Project es un proyecto enfocado a la recuperación de la flora y fauna de diversas zonas de Chiapas, el objetivo es recuperar la mayor parte de los hábitats el estado.";

  const team1 = "LeefTeam ";

  const title1 = "Leef Project ";

  const price1 = 500;
  return (
    <div className="grid grid-cols-3 gap-4 p-10 overflow-y-auto h-screen">
        <CardManage team={team1} title={title1} text={text1} price={price1} nav={nav}/>
        <CardManage team={team1} title={title1} text={text1} price={price1} nav={nav}/>
        <CardManage team={team1} title={title1} text={text1} price={price1} nav={nav}/>
        <CardManage team={team1} title={title1} text={text1} price={price1} nav={nav}/>
        <CardManage team={team1} title={title1} text={text1} price={price1} nav={nav}/>
    </div>
  )
}

export default GridCards