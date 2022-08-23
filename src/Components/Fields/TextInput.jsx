import ArrowSubmit from "../Buttons/ArrowSubmit"

function TextInput(props) {
    return (
        <div className="border-mainBlack border rounded-xl  px-1 py-1 w-96 sm:w-80">
            <div>
                <p className="text-[10px] text-gray-600 pl-2 pt-1">Write a review*</p>
            </div>

            <div className="flex w-auto">
                
                <textarea style={{resize: "none", outline: "none"}} className="w-96 bg-none pt-2 px-2" name="reply" id="" cols="30" rows="2" maxLength={56}
                onChange={props.changeValue}
                value={props.formValue}
                ></textarea>
                <ArrowSubmit 
                disabled={props.status}
                submit={props.send}
                style={props.style} />
            </div>
            <p className="text-[10px] text-gray-600 font-bold  pl-2">{props.wordCount}</p>
        </div>
    )
}

export default TextInput;