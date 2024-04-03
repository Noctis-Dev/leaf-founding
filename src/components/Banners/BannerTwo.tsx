function BannerTwo() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-1 lg:px-12 xl:gap-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-9 text-4xl font-extrabold tracking-tight text-green-500 dark:text-green-500">
              La filantropía necesita más innovación.
            </h2>
            <p className="mb-9">
              ¿Y si los acuerdos fueran mutuamente beneficiosos y las
              iniciativas sostenibles maximizaran su impacto financiero?
            </p>
            <p className="mb-9">
              Nuestra aplicación está allanando un camino nuevo y emocionante
              con una plataforma basada en contratos inteligentes, impulsada por
              la comunidad, aprovechando la tecnología blockchain para unir
              proyectos verdes con oportunidades de financiamiento regenerativo.
            </p>
          </div>
          <div className="bg-green-500 rounded-md grid grid-cols-1 sm:grid-cols-3 gap-4 pb-5">
            <div className="w-full mt-10 mb-4">
              <p className="font-extrabold text-gray-800 text-4xl text-center">
                73M+
              </p>
              <p className="font-extrabold text-gray-800 text-xl text-center">
                Proyectos.
              </p>
            </div>

            <div className="w-full mt-10 mb-4">
              <p className="font-extrabold text-gray-800 text-4xl text-center">
                $8,461,000
              </p>
              <p className="font-extrabold text-gray-800 text-xl text-center">
                Donado a proyectos.
              </p>
            </div>

            <div className="w-full mt-10 mb-4">
              <p className="font-extrabold text-gray-800 text-4xl text-center">
                6000+
              </p>
              <p className="font-extrabold text-gray-800 text-xl text-center">
                Numero de donadores
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerTwo;
