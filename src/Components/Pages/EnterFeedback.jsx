
import TextInput from "../Fields/TextInput"
import MainButton from "../Buttons/MainButton"
import RadioInput from "../Fields/RadioInput"

function enterFeedBack(){
    return(
        <div className="w-full flex flex-col justify-center items-center space-y-5 h-screen">
            <div className="w-96 pb-10">
                <p className="text-[15px]">How has your experience been working at PLEASE company?</p>
            </div>
            <div className="flex flex-row space-x-3">
                <RadioInput 
                    number="1" 
                    idName="one"
                    labelFor="one"
                />
                <RadioInput 
                    number="2"
                    idName="two"
                    labelFor="two"
                />
                <RadioInput 
                    number="3"
                    idName="three"
                    labelFor="three" 
                />
                <RadioInput 
                    number="4" 
                    idName="four"
                    labelFor="four"
                />
                <RadioInput 
                    number="5"
                    idName="five"
                    labelFor="five" 
                />
            </div>
            <TextInput />
            <MainButton />
        </div>
    )
}

export default enterFeedBack