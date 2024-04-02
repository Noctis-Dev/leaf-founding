import CardProject from "../Cards/CardProject";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

function CarouselCardsTwo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const text1 =
    "Leef Project es un proyecto enfocado a la recuperación de la flora y fauna de diversas zonas de Chiapas, el objetivo es recuperar la mayor parte de los hábitats el estado.";
  const text2 =
    "EcoRescate es un ambicioso proyecto dedicado a la recuperación y preservación de la rica biodiversidad de la selva amazónica en Brasil una región vital para la vida silvestre. ";
  const text3 =
    "AquaVida es un proyecto dedicado a la recuperación de los ecosistemas acuáticos en el Delta del Misisipi, una región vital para la vida silvestre y la salud de los ríos y humedales.";
  const text4 =
    "El proyecto Bosque Renaciente es una iniciativa apasionada enfocada en la recuperación de la selva tropical en Costa Rica, uno de los países más ricos en biodiversidad del mundo.";

  const team1 = "LeefTeam ";
  const team2 = "AquaVipe";
  const team3 = "CarrotState";
  const team4 = "Javapapus";

  const title1 = "Leef Project ";
  const title2 = "EcoRescate";
  const title3 = "AquaVida";
  const title4 = "Bosque Renaciente";

  const price1 = 500;
  const price2 = 1500;
  const price3 = 3500;
  const price4 = 2500;

  const cardsDonation = [
    <CardProject team={team1} title={title1} text={text1} price={price1} />,
    <CardProject text={text2} team={team2} title={title2} price={price2} />,
    <CardProject text={text3} team={team3} title={title3} price={price3} />,
    <CardProject text={text4} team={team4} title={title4} price={price4} />,
    <CardProject text={text4} team={team4} title={title4} price={price4} />,
  ];

  return (
    <div>
      <section className="bg-gray-800 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl items-center px-3 sm:px-5 md:px-4 md:py-16 gap-8 sm:py-16 md:grid md:grid-cols-1 lg:px-12 xl:gap-16">
          <div className="grid-cols-1">
            <h2 className="text-4xl font-extrabold tracking-tight text-green-500 dark:text-green-500 mb-9 ">
              Proyectos
            </h2>
            <p className="text-gray-400 dark:text-gray-400 md:text-lg ">
                Tenemos la capacidad de ofrecer apoyo a una variedad de proyectos.
            </p>
            <p className="text-gray-400 dark:text-gray-400 md:text-lg ">
                A continuación, presentamos algunos de los emocionantes proyectos
                a los que podemos brindar nuestro respaldo.
            </p>
          </div>
          <div className="py-3 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 md:h-full min-h-[605px]">
              <Carousel slide={false} indicators={false}>
                {cardsDonation
                  .map((card, index, array) => {
                    if (windowWidth >= 1024) {
                      // lg: 3 cards
                      if (index % 3 === 0) {
                        return [
                          <div key={index} className="grid grid-cols-3 gap-4">
                            <div>{card}</div>
                            {array[index + 1] && <div>{array[index + 1]}</div>}
                            {array[index + 2] && <div>{array[index + 2]}</div>}
                          </div>,
                        ];
                      }
                    } else if (windowWidth >= 768) {
                      // md: 2 cards
                      if (index % 2 === 0) {
                        return [
                          <div key={index} className="grid grid-cols-2 gap-4">
                            <div>{card}</div>
                            {array[index + 1] && <div>{array[index + 1]}</div>}
                          </div>,
                        ];
                      }
                    } else {
                      // sm: 1 card
                      return (
                        <div key={index} className="grid grid-cols-1 gap-4">
                          <div>{card}</div>
                        </div>
                      );
                    }
                    return null;
                  })
                  .filter(Boolean)}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarouselCardsTwo;
