import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import ButtonsCreate from './ButtonsCreate';

function FormMilestones() {

    const navigate = useNavigate();

    const handlesaveClick = () => {
        navigate("/create/confirm");
    }

    const [milestone1, setMilestone1] = useState("");
    const MilestonetInputChange1 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMilestone1(event.target.value);
    };

    const [milestone2, setMilestone2] = useState("");
    const MilestonetInputChange2 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMilestone2(event.target.value);
    };

    const [milestone3, setMilestone3] = useState("");
    const MilestonetInputChange3 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMilestone3(event.target.value);
    };

    const [milestone4, setMilestone4] = useState("");
    const MilestonetInputChange4 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMilestone4(event.target.value);
    };

    const [milestone5, setMilestone5] = useState("");
    const MilestonetInputChange5 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMilestone5(event.target.value);
    };

    return (

        <div className="auto-cols-auto gap-4">
            <form className="w-1/2 ml-20 pt-11">
                <p className=" text-3xl text-green-500 font-bold mb-11 pt-11">Objetivos</p>
                <label className="block text-xl text-green-400 font-bold pt-4 mb-5">Objetivo 1</label>
                <label className="block text-md text-white font-light pt-1 mb-5">Puedes escribir de 200 a 500 palabras</label>
                <div className="w-full mb-4 border border-gray-800 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-gray-600 rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea id="editor" value={milestone1} onChange={MilestonetInputChange1} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..."></textarea>
                    </div>
                </div>
                <label className="block text-xl text-green-400 font-bold pt-4 mb-5">Objetivo 2</label>
                <label className="block text-md text-white font-light pt-1 mb-5">Puedes escribir de 200 a 500 palabras</label>
                <div className="w-full mb-4 border border-gray-800 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-gray-600 rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea id="editor" value={milestone2} onChange={MilestonetInputChange2} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..."></textarea>
                    </div>
                </div>
                <label className="block text-xl text-green-400 font-bold pt-4 mb-5">Objetivo 3</label>
                <label className="block text-md text-white font-light pt-1 mb-5">Puedes escribir de 200 a 500 palabras</label>
                <div className="w-full mb-4 border border-gray-800 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-gray-600 rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea id="editor" value={milestone3} onChange={MilestonetInputChange3} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..."></textarea>
                    </div>
                </div>
                <label className="block text-xl text-green-400 font-bold pt-4 mb-5">Objetivo 4</label>
                <label className="block text-md text-white font-light pt-1 mb-5">Puedes escribir de 200 a 500 palabras</label>
                <div className="w-full mb-4 border border-gray-800 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-gray-600 rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea id="editor" value={milestone4} onChange={MilestonetInputChange4} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..."></textarea>
                    </div>
                </div>
                <label className="block text-xl text-green-400 font-bold pt-4 mb-5">Objetivo 5</label>
                <label className="block text-md text-white font-light pt-1 mb-5">Puedes escribir de 200 a 500 palabras</label>
                <div className="w-full mb-4 border border-gray-800 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-gray-600 rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea id="editor" value={milestone5} onChange={MilestonetInputChange5} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..."></textarea>
                    </div>
                </div>
                <div className="flex items-start mb-6 mt-8">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                    </div>

                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-white dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <ButtonsCreate handle={handlesaveClick} />
            </form>
        </div>

    )
}

export { FormMilestones }