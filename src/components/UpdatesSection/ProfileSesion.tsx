import { Avatar } from "flowbite-react"
import AvatarImage from "../../assets/img/avatar.png";
import Like from "../../assets/metric-icons/thumbs-up.png"
import Dislike from "../../assets/metric-icons/thumbs-down.png"



function ProfileSesion() {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
            <Avatar img={AvatarImage} size="md" />
            <div className="text-white text-left ml-4">
                <h5 className="text-md font-semibold">Juan Carlo</h5>
                <p className="text-sm text-gray-400">17 Nov 2022</p>
            </div>
        </div>
        <div className="flex flex-row items-center">
            <img src={Like} alt="no" className="w-4 h-4"/>
            <p className="text-green-500 text-sm ml-2">37</p>
            <img src={Dislike} alt="no" className="w-4 h-4 ml-2"/>
            <p className="text-green-500 text-sm ml-2">37</p>
        </div>
        </div>
    )
}

export default ProfileSesion