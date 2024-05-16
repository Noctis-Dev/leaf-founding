
interface Milestone {
    id: number;
    value: string;
    handleInputChange: (id: number, value: string) => void;
    handleRemoveObjective: (id: number) => void;

}

function Milestone({ id, value, handleInputChange, handleRemoveObjective }: Milestone) {

    return (
        <div>
            <div className="flex justify-between items-center">
                <label className="block text-xl text-green-400 font-bold pt-4 mb-5">Objetivo {id}</label>
                {id >= 6 && (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveObjective(id)}>
                        X
                    </button>
                )}
            </div>
            <label className="block text-md text-white font-light pt-1 mb-5">Puedes escribir de 200 a 500 palabras</label>
            <div className="w-full mb-4 border border-gray-800 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-gray-600 rounded-b-lg dark:bg-gray-800">
                    <textarea id={`editor${id}`} value={value} onChange={(e) => handleInputChange(id, e.target.value)} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Escribe un artículo..."></textarea>
                </div>
            </div>
        </div>
    )
}

export default Milestone