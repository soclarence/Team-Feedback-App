import Delete from "../../img/delete.svg"

function deleteButton() {
    return(
        <div className="bg-gray-100 w-10 h-10 flex justify-center items-center rounded-full">
            <img className="w-4 h-4" src={Delete} alt="" />
        </div>
    )
}

export default deleteButton;