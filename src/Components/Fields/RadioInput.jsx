

function radioInput(props) {
    return (
        <div className="w-auto mb-3">
            <input className="peer hidden" type="radio" id={props.idName} name="rate" />
            <label className="px-7 py-6  bg-brightBlue border rounded-2xl hover:bg-mainBlue peer-checked:bg-mainBlue peer-checked:text-white cursor-pointer transition" htmlFor={props.labelFor}>
                <span>{props.number}</span>
            </label>
        </div>
    )
}

export default radioInput