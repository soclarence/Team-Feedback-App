import Rocket from "../Atoms/Img/rocket.png"
import Arrow130 from "../Atoms/Img/arrow130.svg"

function Question(props) {
    return(
        <div className="">
            <div style={props.color} className="flex flex-col items-center pt-[45px] px-[30px] pb-7 rounded-[2rem] space-y-14 w-80 h-92 overflow-hidden">
                <div className=" w-20 h-20 bg-gray-100 flex items-center justify-center rounded-2xl">
                    <img className="w-10 h-10" src={Rocket} alt="rocket" />
                </div>
                <p className="text-center text-white px-4 font-medium">{props.question}</p>
                <div className="w-full flex justify-end">
                    <div className="bg-black p-4 w-14 h-14 rounded-xl flex items-center">
                        <img src={Arrow130} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;