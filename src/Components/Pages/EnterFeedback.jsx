
import TextInput from "../Fields/TextInput"
import MainButton from "../Buttons/MainButton"
import RadioInput from "../Fields/RadioInput"
import FeedBackPreview from "../Employee/FeedBackPreview"
import userData from "../../Data/UserData"
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import { useState, useEffect } from "react"

function EnterFeedBack({handleAdd}){
    const [inputValue, setInputValue] = useState({rate: "",reply:""});
    const [userReply, setUserReply] = useState({rate: "",reply:""});
    const [randomUser, setRandomUser] = useState([{img: "",name: ""}])

    const [feedDisplay, setFeedDisplay] = useState({display: "none"})
    const [inputNum, setInputNum] = useState(55)
    const [buttonControl, setButtonControl] = useState(false)
    const [submitControl, setSubmitControl] = useState (false)

    let navigate = useNavigate();

    
    function handleChange(e){
        const {name, value} = e.target;

        // word count function
        setInputNum(55 - inputValue.reply.length)

        setInputValue(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        })

    }

    // radio/button disabled status function (effect)
    useEffect(() => {
        setButtonControl(() => {
            if(inputValue.rate < "1" || inputValue.reply.length < 10) {
                return true
            }else{
                return false
            }
        })

        setSubmitControl(() => {
            if(userReply.reply === ""){
                return true
            }else{
                return false
            }
        })
    }, [inputValue, userReply])


    // Random user function
    function randomImage(){
        const randomUserData = Math.floor(Math.random() * userData.length);
        setRandomUser(() => {
            return{
                img: userData[randomUserData].img,
                name: userData[randomUserData].name
            }
        })

    }
    

    // feedback reply
    function sendUserReply() {
        setUserReply(() => {
            return {
                rate: inputValue.rate,
                reply: inputValue.reply
            }
        });

        setButtonControl(true);

        setInputNum(55);

        setFeedDisplay({display: ""});
        
        
        setInputValue({
            rate: "",
            reply:""});

        // prevent page refresh
        // e.preventDefault();
    }


    // delete feedback
    function deleteReply(){
        setUserReply({
            rate: "",
            reply: ""
        })

        setButtonControl(false);
        setFeedDisplay({display: "none"});
        setInputNum(55 - inputValue.reply.length)
    }


    // edit feedback
    function editReply(){
        setInputValue({
            rate: userReply.rate,
            reply: userReply.reply + " "
        })

        setInputNum(55 - userReply.reply.length)

        
    }

    // submit function
    const handleSubmit = (e) => {
        e.preventDefault()

        const newFeedback = {
            img: randomUser.img,
            rate: parseInt(userReply.rate),
            name: randomUser.name,
            reply: userReply.reply
            
        }

        handleAdd(newFeedback)
        navigate("/thank-you")
        
    }

    return(
        <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.5 }}
            >
        <div onLoad={randomImage} className="w-full flex justify-center items-center h-screen ">
            <form onSubmit={handleSubmit} className="w-96 flex flex-col space-y-5 justify-center items-center content-center">
                <div>
                    <FeedBackPreview
                        img= {randomUser.img}
                        name= {randomUser.name}
                        rate={userReply.rate}
                        reply={userReply.reply}
                        click={deleteReply}
                        clickEdit={editReply}
                        style={feedDisplay} 
                        />
                </div>
                
                <div className="w-96 pb-5">
                    <p className="text-[15px] sm:px-10 sm:text-center">How has your experience been working at PLEASE company?*</p>
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
                    wordCount={inputNum}
                    status={buttonControl} />

                <div>
                    {/* <Link to="/thank-you"> */}
                        <MainButton
                        buttonType="submit"
                        status={submitControl} />
                    {/* </Link> */}
                </div>
            </form>
        </div>
        </motion.div>
    )
}

export default EnterFeedBack