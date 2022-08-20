import DashboardImg from '../Atoms/Img/dashboard.png'
import HomeButton from '../Buttons/HomeButton';
import { motion } from "framer-motion";

function HeroSection() {
    return(
        <div className="flex mt-48 flex-col items-center">
             <motion.div
    initial={{ opacity: 0, y: "-10%" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
            <h1 className="2sm:text-[1.6rem] text-[4rem] font-black text-center">The ultimate internal <br/>company review solution</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: "-10%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
            <p className="text-center w-[512px] 2sm:w-[300px] py-8 font-normal">Best way to manage internal communication, work review and improve work life/communication quality</p>
            </motion.div>
            <div>
                <HomeButton
                    text="Product Demo" />
            </div>
            <div className='shadow-[0_25px_85px_rgba(118,125,232,0.1)] mt-9 p-9 h-full'>
                <img className=' 2xl:h-[700px] 2xl:w-[1182] md:w-[1090px] md:h-auto' src={DashboardImg} alt="dashboard" />
            </div>
        </div>
    )
}

export default HeroSection;