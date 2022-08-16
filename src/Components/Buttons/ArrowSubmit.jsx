import Arrow from "../Atoms/Img/arrowSubmit.svg"

function arrowSubmit(props) {
    return(
            <button onClick={props.submit} className="w-auto h-auto px-3 py-4 bg-mainBlack rounded-xl">
                <img src={Arrow} alt="sumbit" />
            </button>
    )
}

export default arrowSubmit;