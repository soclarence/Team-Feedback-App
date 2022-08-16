import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";


function employeeFeedback(props) {
    return(
        <div style={props.style} className="w-96 sm:w-80 flex items-start space-x-1 pb-8">
            <div className="flex items-end">
                <img className="w-[40px] h-[40px]" src={props.photo} alt="user" />

                <div className="ml-3 bg-gray-100 rounded-r-3xl rounded-tl-3xl">
                    <div className="pl-5 pt-5 text-sm flex space-x-1">
                        <p className="text-sm font-bold">{props.name}</p>

                        <div className="bg-mainOrange w-5 h-5 rounded-md">
                        <p className="text-[10px] text-center font-bold text-white">{props.rate}</p>

                        </div>
                    </div>
                    <p className="px-5 pt-1 pb-5">{props.reply}</p>
                </div>

            </div>
            <div style={props.display} className="grid space-y-1">
                <EditButton clickEdit={props.clickEdit} />
                <DeleteButton click={props.click}/>
            </div>
        </div>
    )
}

export default employeeFeedback;