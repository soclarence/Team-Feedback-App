import MainButton from "../Buttons/MainButton";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

function thankYou() {
    return(
        <div className="w-full flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-brightGreen w-20 h-20 rounded-3xl flex justify-center items-center">
                    <p className="text-[25px]">🎉</p>
                </div>

                </motion.div>

                
                <div className="text-center w-96 pt-7">
                    <p className="font-bold text-lg">Thank You</p>
                    <p className="pt-2 px-8 text-sm">Thank you for your participation <span className="font-bold">Barney</span>,
                        Erikson will be happy to hear your feedback</p>
                </div>

                <div className="pt-10 mt-10">
                    <Link to="/dashboard">
                        <MainButton />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default thankYou;