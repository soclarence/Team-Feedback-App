import Arrow from "../Atoms/Img/arrowSubmit.svg"

function arrowSubmit(props) {
    return(
            <button disabled={props.disabled} onClick={props.submit} style={props.style} className="w-auto h-auto px-3 py-4 bg-mainBlack rounded-xl">
                <img src={Arrow} alt="sumbit" />
            </button>
    )
}

export default arrowSubmit;