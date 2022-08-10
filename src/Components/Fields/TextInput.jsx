import ArrowSubmit from "../Buttons/ArrowSubmit"

function textInput() {
    return (
        <div className="border-mainBlack border rounded-xl  px-1 py-1 w-96">
            <div>
                <p className="text-[10px] text-gray-600 pl-2 pt-1">Write a review*</p>
            </div>

            <div className="flex w-auto">
                {/* <input className="w-96 text-[13px]" type="text" maxLength={55} /> */}
                <textarea style={{resize: "none", outline: "none"}} className="w-96 bg-none pt-2 px-2" name="" id="" cols="30" rows="2" maxLength={55}></textarea>
                <ArrowSubmit />
            </div>
            <p className="text-[10px] text-gray-600 font-bold  pl-2">55</p>
        </div>
    )
}

export default textInput;