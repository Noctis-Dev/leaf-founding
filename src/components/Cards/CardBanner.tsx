import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

function CardBanner() {

  const myTheme = {
    color: {
      green: "bg-green-500 text-gray-700",
    },
  };

  return (
    <div>
      <Card className=" md:py-16 lg:py-16 xl:py-16 p-5 bg-white border border-gray-900 bg-gray-900 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
        <a>
          <h5 className="text-4xl font-bold tracking-tight text-green-500 dark:text-green-500 my-10">
            PROYECTOS MAS POPULARES
          </h5>
          <h5 className=" text-xl font-normal tracking-tight text-gray-300 dark:text-white py-2">
            Estos son los proyectos que mas han resaltado en las ultimas semanas
            apóyalos para seguir adelante.
          </h5>
        </a>
        <div className="flex flex-wrap gap-2 w-121">
          <Button className="bg-green-500 text-gray-800 my-10" color="green" theme={myTheme}>
            Explora Proyectos
            <HiOutlineArrowRight className="ml-2 h-5 w-5 " />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default CardBanner;
