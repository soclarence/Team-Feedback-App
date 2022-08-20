

function radioInput(props) {
    return (
        <div className="w-auto mb-3">
            <input 
                onChange={props.select}
                className="peer hidden" type="radio" id={props.idName} value={props.value} name="rate" />
            <label className="px-7 py-6 sm:px-5 sm:py-4  bg-brightBlue border rounded-2xl hover:bg-mainBlue peer-checked:bg-mainBlue peer-checked:text-white cursor-pointer transition" htmlFor={props.labelFor}>
                <span>{props.number}</span>
            </label>
        </div>
    )
}

export default radioInput