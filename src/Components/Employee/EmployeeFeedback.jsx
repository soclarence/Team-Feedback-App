import profilePhoto from "../../img/profilePhoto.png"
import DeleteButton from "../Buttons/DeleteButton";


function employeeFeedback() {
    return(
        <div className="w-96 flex items-start space-x-2">
            <div className="flex items-end">
                <img className="w-[40px] h-[40px]" src={profilePhoto} alt="memoji" />

                <div className="ml-3 bg-gray-100 rounded-r-3xl rounded-tl-3xl">
                    <div className="pl-5 pt-5 text-sm flex space-x-1">
                        <p className="text-sm font-bold">Barney Stinson</p>

                        <div className="bg-mainOrange w-5 h-5 rounded-md">
                        <p className="text-[10px] text-center font-bold text-white">5</p>

                        </div>
                    </div>
                    <p className="px-5 pt-1 pb-5">I really love working here. but I'd love a raise, thanks.</p>
                </div>

            </div>
            <div className="grid">
                <DeleteButton />
                <div>e</div>
            </div>
        </div>
    )
}

export default employeeFeedback;