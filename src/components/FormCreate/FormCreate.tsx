import { useState } from 'react';
import { useProjectData } from '../../hooks/useProjectData';

function FormCreate() {

    const [projectData, setProjectData] = useProjectData();

    

    console.log(projectData);

    const [title, setTitle] = useState("");

    const TitleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
        setProjectData(prevData => ({ ...prevData, name: title }))
    };

    const [description, setDescription] = useState("");
    const DescriptionInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDescription(event.target.value);
        setProjectData(prevData => ({ ...prevData, description: description }))
    };

    const [image, setImage] = useState<File | null>(null);
    console.log(image);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setImage(files[0]);
        } else {
            setImage(null);
        }
    };

    return (
        <div>
            <div className="mb-11">
                <label htmlFor="title" className="block text-xl text-green-400 font-bold pt-8 mb-5">Nombre del proyecto</label>
                <input type="text" value={title} onChange={TitleInputChange} id="title" className="border-gray-800 bg-gray-600 shadow-sm border text-gray-900 text-sm rounded-lg focus:ring-border-gray-900 focus:border-gray-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-900 dark:focus:border-gray-900 dark:shadow-sm-light" placeholder="Mi primer proyecto" />
            </div>
            <label className="block text-xl text-green-400 font-bold pt-4 mb-5">Hablanos de tu proyecto...</label>
            <div className="w-full mb-4 border border-gray-800 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-gray-600 rounded-b-lg dark:bg-gray-800">
                    <textarea id="editor" value={description} onChange={DescriptionInputChange} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write about your proyect"></textarea>
                </div>
            </div>
            <label className="block mb-5 pt-8 text-xl text-green-400 font-bold">Agrega una imagen de tu proyecto</label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-600 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-600 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 bg-gray-600">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400 bg-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-600"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} />
                </label>
            </div>
            <div className="mb-6">
                <label htmlFor="resp" className="block mb-5  pt-8 text-xl text-green-400 font-bold mt-8 ">Responsable</label>
                <input type="text" id="resp" className="shadow-sm bg-gray-600 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div className="flex items-start mb-6 mt-8">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-white dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
        </div>

    )
}

export { FormCreate }