import { Card } from "flowbite-react";
import ImageDonate from "/src/assets/img/people.png";

function BannerDonate() {
  return (
    <Card
      className="max-w-2xl bg-gray-900 border-gray-800 pl-1 pr-1"
    >
    <div>
        <img src={ImageDonate} alt="Imagen de donación"/>
    </div>
      <a href="">
        <span className="rounded bg-green-300 px-2.5 text-xs font-semibold text-gray-700 py-1 ">
          Leefteam
        </span>
      </a>

      <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white py-3 pt-5">
        LeefProject
      </h5>

      <h5 className="text-base font-normal tracking-tight text-gray-300 dark:text-white py-2 pb-8">
        Leef Project es un proyecto enfocado a la recuperación de la flora y
        fauna de diversas zonas de Chiapas, el obj0etivo es recuperar la mayor
        parte de los hábitats el estado.
      </h5>

      <span className="text-3xl font-bold text-white dark:text-white pb-5">
        $599
      </span>
      
      <a href="#">
        <span className="rounded bg-green-200 px-2.5 text-xs font-semibold text-gray-700 dark:bg-cyan-200 dark:text-gray-700 py-1">
          Total recaudado
        </span>
      </a>
    </Card>
  );
}

export default BannerDonate;

