import Delete from "../Atoms/Img/delete.svg"

function deleteButton(props) {
    return(
        <button type="button"
            className="bg-gray-300 w-10 h-10 cursor-pointer flex justify-center items-center rounded-full hover:drop-shadow-md hover:bg-red-200"
            onClick={props.click}>
                <img className="w-4 h-4" src={Delete} alt="" />
        </button>
    )
}

export default deleteButton;