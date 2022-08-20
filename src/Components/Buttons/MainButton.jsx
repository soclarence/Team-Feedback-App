function MainButton(props) {
    return(
            <button disabled={props.status} type={props.buttonType} className="w-96 sm:w-80 h-50  py-4 bg-mainBlack rounded-xl">
                <p className="text-white text-sm font-bold">DONE</p>
            </button>
    )
}

export default MainButton;