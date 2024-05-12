import DescriptionUpdate from "./DescriptionUpdate"
import ProfileSesion from "./ProfileSesion"

function ReplyCard() {
  return (
    <div className="bg-gray-700 w-3/4 rounded-md p-4 mt-2 ">
        <ProfileSesion />
        <div className="mt-2">
        <DescriptionUpdate />
        </div>
    </div>
  )
}

export default ReplyCard