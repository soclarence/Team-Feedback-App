import Arrow from "../Atoms/Img/arrowSubmit.svg"

function arrowSubmit() {
    return(
        <a href="#">
            <button className="w-auto h-auto px-3 py-4 bg-mainBlack rounded-xl">
            <img src={Arrow} alt="sumbit" />
            </button>
        </a>
    )
}

export default arrowSubmit;