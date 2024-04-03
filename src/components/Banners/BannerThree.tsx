
function BannerThree() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-12 xl:gap-16">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            className="w-full dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            className="hidden w-full dark:block"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-green-500">
              ¿Qué es LeefProject?.
            </h2>
            <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
              LeefProject es una plataforma innovadora que conecta proyectos
              sostenibles y contratos inteligentes. Utilizando tecnología
              blockchain, facilitamos el acceso a financiamiento regenerativo de
              manera transparente y eficiente. Nuestra misión es promover la
              colaboración y la inversión en iniciativas sostenibles, impulsando
              un futuro más ecológico y equitativo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-12 xl:gap-16">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-green-500">
              Donaciones con recompensas.
            </h2>
            <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
              Creemos en la armonía entre la filantropía y la sostenibilidad.
              LeefProject es una plataforma de donaciones sin tarifas y un
              ecosistema de comunidades comprometidas con la sostenibilidad.
              Unimos personas, organizaciones y proyectos verdes para maximizar
              el impacto y canalizar recursos hacia las necesidades más
              apremiantes, promoviendo la transparencia en todo momento.
            </p>
          </div>
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            className="w-full dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            className="hidden w-full dark:block"
          />
        </div>
      </section>

      <section className="bg-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-14 xl:gap-16">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            className="w-full dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            className="hidden w-full dark:block"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-green-500">
              Proyectos ecológicos.
            </h2>
            <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
              LeefProject lidera la evolución de la filantropía y los proyectos
              ecológicos. Impulsamos un cambio positivo en la sociedad y el
              medio ambiente al permitir que las donaciones generen beneficios
              mutuos. Si deseas formar parte de un movimiento global que impulsa
              la sostenibilidad a través de contratos inteligentes y
              colaboración comunitaria, LeefProject es tu destino.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerThree;
