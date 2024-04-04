import { Button } from "flowbite-react";
import { useState } from 'react';
import linea from "../../assets/img/border.png";
import UpdatesSection from "../../components/UpdatesSection/UpdatesSection";
import InfoSection from "../../components/InfoSection/InfoSection";


const buttonTheme = {
    color: {
        green: "border-b-2 hover:border-green-500",
        selected: "border-b-2 bg-gray-700 border-green-500 rounded-none",
    },
    size: {
        default: "py-2 px-4",
    },
    base: "text-white rounded-none"
};

function SectionSelect() {
    const [selectedButton, setSelectedButton] = useState<string | null>("Información");

    return (
        <div className="mt-8">
            <Button.Group>
                <Button
                    theme={buttonTheme}
                    color={selectedButton === 'Información' ? 'selected' : 'green'}
                    onClick={() => setSelectedButton('Información')}
                >
                    Información
                </Button>
                <Button
                    theme={buttonTheme}
                    color={selectedButton === 'Actualizaciones' ? 'selected' : 'green'}
                    onClick={() => setSelectedButton('Actualizaciones')}
                >
                    Actualizaciones
                </Button>
            </Button.Group>
            <img className='h-1 mb-4 mt-4' src={linea} alt="Not Found " />
            <UpdatesSection/>
            <InfoSection/>
        </div>

    )
}

export default SectionSelect;