import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import ButtonsCreate from './ButtonsCreate';
import Milestone from './Milestone';

function FormMilestones() {

    const navigate = useNavigate();

    const handlesaveClick = () => {
        navigate("/create/confirm");
    }

    const [objectives, setObjectives] = useState([
        { id: 1, value: '' },
        { id: 2, value: '' },
        { id: 3, value: '' },
        { id: 4, value: '' },
        { id: 5, value: '' },],);

    const handleAddObjective = () => {
        setObjectives([...objectives, { id: objectives.length + 1, value: '' }]);
    }

    const handleInputChange = (id: number, newValue: string) => {
        setObjectives(objectives.map(obj => obj.id === id ? { ...obj, value: newValue } : obj));
    }

    const handleRemoveObjective = (id: number) => {
        setObjectives(objectives.filter(obj => obj.id !== id));
    }

    return (

        <div className="auto-cols-auto gap-4">
            <div className="w-3/4 ml-20 pt-11">
                <p className=" text-3xl text-green-500 font-bold mb-11 pt-11">Objetivos</p>
                {objectives.map(obj => (
                    <div key={obj.id}>
                        <Milestone id={obj.id} value={obj.value} handleInputChange={handleInputChange} handleRemoveObjective={handleRemoveObjective} />
                    </div>
                ))}
                <button onClick={handleAddObjective} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-5 mb-5">
                    Agregar Objetivo +
                </button>
                <ButtonsCreate handle={handlesaveClick} />
            </div>
        </div>

    )
}

export { FormMilestones }