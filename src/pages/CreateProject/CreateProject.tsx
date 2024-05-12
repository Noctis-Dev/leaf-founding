import { FormCreate } from "../../components/FormCreate/FormCreate"
import { useNavigate } from 'react-router-dom';
import ButtonsCreate from '../../components/FormCreate/ButtonsCreate';

function CreateProject() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="auto-cols-auto gap-4">
        <div className="w-1/2 ml-20 pt-11">
          <p className=" text-3xl text-green-500 font-bold mb-11 pt-11">CREAR PROYECTO</p>
          <FormCreate />
          <ButtonsCreate handle={() => navigate("/create/milestones")} />
        </div>
      </div>
    </div>
  )
}

export default CreateProject