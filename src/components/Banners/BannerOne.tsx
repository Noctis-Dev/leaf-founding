import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

const myTheme = {
  color: {
    green: "bg-green-500 text-gray-700",
  },
};

function BannerOne() {
  return (
    <div>
      <section className="bg-gray-900 dark:bg-gray-900 ">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-12 xl:gap-16">
          <div className="text-gray-400 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-green-500">
              No reinventamos la rueda
            </h2>
            <p className="mb-8">
              Juntos, creamos un futuro más sostenible. Nuestro equipo de
              expertos en contratos inteligentes y proyectos verdes se
              compromete a ser tu socio en la innovación. Somos lo
              suficientemente pequeños para ser ágiles, pero lo suficientemente
              grandes para impulsar tu visión a la velocidad del cambio que el
              mundo necesita.
            </p>
            <div className="flex flex-wrap gap-2 w-121">
              <Button color="green" theme={myTheme}>
                Explora Proyectos
                <HiOutlineArrowRight className="ml-2 h-5 w-5 " />
              </Button>
            </div>
            <p></p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 pb-12">
            <img
              alt=""
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              className="w-full rounded-lg"
            />
            <img
              alt=""
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              className="mt-8 w-full rounded-lg lg:mt-10 mb-12"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerOne;
