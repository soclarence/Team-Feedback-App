import Confetti from "../../img/confetti.png"
import MainButton from "../Buttons/MainButton";

function thankYou() {
    return(
        <div className="w-full flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="bg-brightGreen w-20 h-20 rounded-3xl flex justify-center items-center">
                    <img className="object-cover w-7 h-7" src={Confetti} alt="thank you" />
                </div>

                <div className="text-center w-96 pt-7">
                    <p className="font-bold text-lg">Thank You</p>
                    <p className="pt-2 px-8 text-sm">Thank you for your participation <span className="font-bold">Barney</span>,
                        Erikson will be happy to hear your feedback</p>
                </div>

                <div className="pt-10 mt-10">
                    <MainButton />
                </div>
            </div>
        </div>
    )
}

export default thankYou;