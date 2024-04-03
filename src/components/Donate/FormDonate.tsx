import { Card } from "flowbite-react";
import { ToggleSwitch } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useState } from "react";


function FormDonate() {
  const [switch1, setSwitch1] = useState(false);

  

  return (
    <Card className="max-w-2xl border-gray-800 dark:bg-gray-700 dark:border-gray-700">
      <h1 className="text-2xl font-bold tracking-tight text-white dark:text-white">
        Donar
      </h1>
      <form>
        <div className="flex mt-16">
          <div className="flex-shrink-0 z-10 inline-flex items-start py-2.5 px-4 text-sm font-medium bg-green-500 text-center text-gray-900 rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-300">
            <Dropdown label="Seleccion token" dismissOnClick={false} inline>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="relative w-3/4">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-r-lg border-l-gray-100 border-l-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 bg-gray-600"
              placeholder="Importe"
              required
            />
          </div>
        </div>
      </form>
      <p className="font-normal text-gray-400">
        Over the past year, Volosoft has undergone many changes! After months of
        preparation and some hard work, we moved to our new office.
      </p>
      <a href="">
        <span className="mr-2 rounded bg-green-200 px-2.5 py-0.5 text-xs font-bold text-gray-700 dark:bg-cyan-200 dark:text-cyan-800">
          Tu donacion sera de 700 TVARA
        </span>
      </a>
      <div className="flex max-w-md flex-col gap-4 mt-10">
        <div className="flex gap-2">
          <ToggleSwitch color="green" checked={switch1} onChange={setSwitch1} />
          <h2 className="text-white">Donar de forma anonima</h2>
        </div>
        <p className="text-gray-400 mb-16">
          Si lo compruebas, ocultaremos tu nombre y el enlace de la transacción
          de donación de la página del proyecto, y no mostraremos esta donación
          en tu página de perfil público.
        </p>
      </div>
      <div className="flex items-center justify-between mt-16 ">
        <a
          href="#"
          className="rounded-lg bg-green-500 hover:bg-green-800 px-5 py-2.5 text-center text-sm font-medium text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
        >
          Donar
        </a>
      </div>
    </Card>
  );
}

export default FormDonate;
