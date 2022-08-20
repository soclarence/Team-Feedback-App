
import {motion} from "framer-motion"

function employeeCard(props) {
    return(
        <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <div className="container mx-auto overflow-hidden">
                    <img className="h-[150px] w-[150px] xl:w-[150px] xl:h-[150px] md:h-[100px] md:w-[100px] 2xl:w-[220px] 2xl:h-[220px] sm:w-[55px] sm:h-[55px]" src={props.image} alt="employee" />
                    <p className="pt-2 font-bold text-base md:text-[11px] sm:text-[10px] xl:text-[13px] ">{props.name}</p>
                    <p className="md:text-[9px] text-xs font-normal sm:text-[9px] xl:text-[11px] ">{props.position}</p>
                </div>
        </motion.div>
    )
}

export default employeeCard;