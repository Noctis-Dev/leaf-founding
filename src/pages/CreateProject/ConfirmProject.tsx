import InfoConfirm from "../../components/FormCreate/InfoConfirm";
import { useNavigate } from 'react-router-dom';


function ConfirmProject() {
    const navigate = useNavigate();

    const handlesaveClick = () => {
        navigate("/");
    }

    return (
        <div className="container mx-auto pt-10 pb-10 ">
            <p className="text-green-500 text-4xl font-bold pb-8">Previsualizacion</p>
    
            <div className="flex ">
                <div className="mr-2 w-3/4">
                    <InfoConfirm />
                </div>
            </div>
            <div className="flex items-start mt-10 gap-6 pb-7">
                <button type="button" onClick={handlesaveClick} className="w-1/7 h-10 p-2.5 text-md font-medium text-gray-800 bg-green-500 justify-center rounded-md focus:ring-4 focus:outline-none focus:ring-green-600">
                    Confirmar Proyecto
                </button>

                <button type="button" className="mb-11 w-1/7 flex items-center justify-center text-gray-400 bg-slate-700 hover:bg-red-700 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 mr-2 -ml-1 w-7">
                        <path d="M8.41152 7.5L13.6952 2.21628C13.7906 2.12419 13.8666 2.01404 13.919 1.89225C13.9713 1.77046 13.9988 1.63947 14 1.50692C14.0011 1.37438 13.9759 1.24293 13.9257 1.12025C13.8755 0.997564 13.8013 0.886108 13.7076 0.79238C13.6139 0.698652 13.5024 0.624529 13.3798 0.574336C13.2571 0.524143 13.1256 0.498886 12.9931 0.500038C12.8605 0.501189 12.7295 0.528727 12.6078 0.581045C12.486 0.633362 12.3758 0.709411 12.2837 0.804753L7 6.08848L1.71628 0.804753C1.528 0.622915 1.27584 0.522296 1.01411 0.524571C0.752369 0.526845 0.501997 0.63183 0.316913 0.816913C0.13183 1.002 0.0268452 1.25237 0.0245708 1.51411C0.0222964 1.77584 0.122915 2.028 0.304753 2.21628L5.58848 7.5L0.304753 12.7837C0.209411 12.8758 0.133362 12.986 0.0810446 13.1078C0.0287274 13.2295 0.00118949 13.3605 3.76909e-05 13.4931C-0.0011141 13.6256 0.0241431 13.7571 0.0743358 13.8798C0.124529 14.0024 0.198652 14.1139 0.29238 14.2076C0.386108 14.3013 0.497564 14.3755 0.620245 14.4257C0.742926 14.4759 0.874375 14.5011 1.00692 14.5C1.13947 14.4988 1.27046 14.4713 1.39225 14.419C1.51404 14.3666 1.62419 14.2906 1.71628 14.1952L7 8.91152L12.2837 14.1952C12.472 14.3771 12.7242 14.4777 12.9859 14.4754C13.2476 14.4732 13.498 14.3682 13.6831 14.1831C13.8682 13.998 13.9732 13.7476 13.9754 13.4859C13.9777 13.2242 13.8771 12.972 13.6952 12.7837L8.41152 7.5Z" fill="#9CA3AF" />
                    </svg>
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default ConfirmProject
