import Edit from "../Atoms/Img/edit.svg"

function editButton() {
    return(
        <div className="bg-mainBlack w-10 h-10 flex cursor-pointer justify-center items-center drop-shadow-md rounded-full hover:bg-mainBlue">
            <img className="w-4 h-4" src={Edit} alt="" />
        </div>
    )
}

export default editButton;