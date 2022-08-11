import Delete from "../../img/delete.svg"

function deleteButton() {
    return(
        <div className="bg-gray-300 w-10 h-10 cursor-pointer flex justify-center items-center rounded-full hover:drop-shadow-md hover:bg-red-200">
            <img className="w-4 h-4" src={Delete} alt="" />
        </div>
    )
}

export default deleteButton;