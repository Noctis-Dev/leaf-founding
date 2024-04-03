import linea from "../../assets/img/border.png";
import CardProject from "../../components/Cards/CardProject";



function AllProjects() {

  const text1 = "Leef Project es un proyecto enfocado a la recuperación de la flora y fauna de diversas zonas de Chiapas, el objetivo es recuperar la mayor parte de los hábitats el estado."

  const team1 = "LeefTeam "


  const title1 = "Leef Project "

  const price1 = 500;


  return (
    <section className="bg-gray-900 dark:bg-gray-900 pt-12 pb-12">
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 lg:grid lg:grid-cols-1 lg:px-6 lg:py-16 mt-12 mb-12 ">
        <div className="text-gray-500 dark:text-gray-400 sm:text-lg pt-12 pb-12 mb-12">
          <img className='ml-[150px] mt-10 mb-10' src={linea} alt="Not Found " />
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white ml-[400px] py-5">
            TODOS LOS PROYECTOS
          </h2>
          <p className="mb-12 ml-[315px] text-green-200">
            APOYE A LOS PROYECTOS QUE SE ENCUENTREN CON LA CRIPTOMONEDA
          </p>
          <img className='ml-[150px] mb-8 ' src={linea} alt="Not Found " />
          <p>
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container">
        <form className="flex items-center w-1/2">
  <label htmlFor="voice-search" className="sr-only">Search</label>
  <div className="relative w-full">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    </div>
    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search " required />
    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
      </svg>
    </button>
  </div>
  <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gren-500   rounded-lg border border-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500">
    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>Search
  </button>
</form>
          <div className="flex justify-left mt-12">
            <p className='text-green-500 text-3xl font-bold pb-2'>Explora</p>
            <p className='text-gray-700 text-3xl font-bold pb-2 ml-3'>350 proyectos</p>
          </div>
        </div>
      </div>
      <section className="bg-gray-700  dark:bg-gray-700 py-1 mt-12 mx-auto">
        <div className="container mx-auto p-12">
          <div className='flex space-x-8 items-center justify-center py-5 pt-11 pb-11'>
            <CardProject team={team1} title={title1} text={text1} price={price1} />
            <CardProject team={team1} title={title1} text={text1} price={price1} />
            <CardProject team={team1} title={title1} text={text1} price={price1} />
          </div>

          <section className="pt-12 pb-12">
            <div className='flex space-x-8 items-center justify-center pt-12 pb-12'>
              <CardProject team={team1} title={title1} text={text1} price={price1} />
              <CardProject team={team1} title={title1} text={text1} price={price1} />
              <CardProject team={team1} title={title1} text={text1} price={price1} />
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}

export { AllProjects }