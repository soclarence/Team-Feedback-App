import Edit from "../Atoms/Img/edit.svg"

function editButton(props) {
    return(
        <button type="button"
        onClick={props.clickEdit} 
            className="bg-mainBlack w-10 h-10 flex cursor-pointer justify-center items-center drop-shadow-md rounded-full hover:bg-mainBlue">
                <img className="w-4 h-4" src={Edit} alt="" />
        </button>
    )
}

export default editButton;