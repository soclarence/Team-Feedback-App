
import TextInput from "../Fields/TextInput"
import MainButton from "../Buttons/MainButton"
import RadioInput from "../Fields/RadioInput"
import EmployeeFeedback from "../Employee/EmployeeFeedback"
import Ross from "../Atoms/Img/TeamPhoto02.png"
import { useState } from "react"

function EnterFeedBack(){
    const [inputValue, setInputValue] = useState({
        rate: "",
        reply:""});

    const [userReply, setUserReply] = useState({
        rate: "",
        reply:""});

    const [feedDisplay, setFeedDisplay] = useState({display: "none"})

    const [inputNum, setInputNum] = useState(55)

    
    function handleChange(e){
        const {name, value} = e.target;

        // word count function
        setInputNum(inputValue.reply.length - 55)

        setInputValue(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        })
    }

    // feedback reply
    function sendUserReply(e) {
        setUserReply(() => {
            return {
                rate: inputValue.rate,
                reply: inputValue.reply
            }
        });

        setInputNum(55);

        setFeedDisplay({display: ""});
        
        setInputValue({
            rate: "",
            reply:""});

        // prevent page refresh
        e.preventDefault();
    }

    // delete feedback
    function deleteReply(){
        setUserReply({
            rate: "",
            reply: ""
        })

        setFeedDisplay({display: "none"});
    }

    // edit feedback
    function editReply(){
        setInputValue({
            rate: userReply.rate,
            reply: " " + userReply.reply
        })
    }

    return(
        <div className="w-full flex justify-center items-center h-screen">
            <div className="w-96 flex-col space-y-5">
                <div>
                    <EmployeeFeedback
                        photo= {Ross}
                        name= "Ross Geller"
                        rate={userReply.rate}
                        reply={userReply.reply}
                        click={deleteReply}
                        clickEdit={editReply}
                        style={feedDisplay} 
                        />
                </div>
                
                <div className="w-96 pb-5">
                    <p className="text-[15px]">How has your experience been working at PLEASE company?*</p>
                </div>

                <div className="flex flex-row space-x-3">
                    <RadioInput 
                    number="1" 
                    idName="1"
                    labelFor="1"
                    select={handleChange}
                    value="1"
                    />
                    <RadioInput 
                    number="2"
                    idName="2"
                    labelFor="2"
                    select={handleChange}
                    value="2"
                    />
                    <RadioInput 
                    number="3"
                    idName="3"
                    labelFor="3"
                    select={handleChange}
                    value="3" 
                    />
                    <RadioInput 
                    number="4" 
                    idName="4"
                    labelFor="4"
                    select={handleChange}
                    value="4"
                    />
                    <RadioInput 
                    number="5"
                    idName="5"
                    labelFor="5"
                    select={handleChange}
                    value="5" 
                    />
                </div>

                <TextInput
                    inputName={inputValue.reply}
                    formValue={inputValue.reply}
                    changeValue={handleChange}
                    send={sendUserReply}
                    wordCount={inputNum} />

                <div>
                    <MainButton />
                </div>
            </div>
        </div>
    )
}

export default EnterFeedBack