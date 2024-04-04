import CarouselUpdate from "./CarouselUpdate"
import DescriptionUpdate from "./DescriptionUpdate"
import ProfileSesion from "./ProfileSesion"
import ReplyCard from "./ReplyCard"
import TittleUpdate from "./TittleUpdate"

function UpdateCard() {
  return (
    <div>
      <div className="bg-gray-700 w-3/4 rounded-md p-4 m-4">
        <ProfileSesion />
        <TittleUpdate />
        <DescriptionUpdate />
        <CarouselUpdate />
      </div>
      <div className="w-3/4 flex justify-end">
        <ReplyCard />
      </div>
      
    </div>

  )
}

export default UpdateCard