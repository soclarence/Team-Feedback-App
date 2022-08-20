import NavMenu from "./NavMenu"
import Logo from "./Img/Logo"
import HomeButton from "../Buttons/HomeButton"
import "./Navbar.css"
import { useState } from "react"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="z-[900] fixed top-0 left-0 right-0 bg-white">
            <div className="flex flex-row justify-center items-center 2sm:pb-1 pb-6 pt-6 px-28 2sm:space-x-28">
                <div className="w-full">
                    <div className="w-9 h-9 flex items-center">
                        <Logo />
                    </div>
                </div>
                <div className={`2sm:opacity-0 transition z-50 flex items-center menu ${isOpen && " text"}`}>

                    
                    <div className={`2sm:hidden menu ${isOpen && " text"}`}>
                        <NavMenu />
                    </div>

                    <div className={`md:hidden 2sm:hidden 2sm:block absolute 2sm:opacity-0 btn menu ${isOpen && " text"}`}>
                    <HomeButton
                    text="Get Started" />
                    </div>
                    
                </div>

                <div className="2sm:hidden flex justify-end w-full">
                    <HomeButton
                    text="Get Started" />
                </div>

                {/* Nav bars */}
                <div className="focus:first:rotate-45 hidden 2sm:block w-full justify-end space-y-2 z-50" onClick={()=> setIsOpen(!isOpen)}>
                    <div className={`bar ${isOpen && "Open"}`}></div>
                    <div className={`bar-2 ${isOpen && "Open"}`}></div>
                </div>
            </div>
            {/* Popup background */}
            <div className="absolute 2sm:h-screen 2sm:w-96 mr-[2000px] top-0 left-0 right-0 bg-none hidden flex space-x-1 flex-col  hidden 2sm:block">
                    <div className="flex">
                        <div className={`absolute shadow-[0_85px_25px_rgba(118,125,232,0.1)] h-screen w-[7500px] bg-brightBlue popup ${isOpen && "Pop"}`}></div>
                        <div className={`shadow-[0_85px_25px_rgba(118,125,232,0.1)] absolute h-screen w-[750px] bg-mainBlue popup ${isOpen && "Pop2"}`}></div>
                    </div>
                </div>
        </div>
    )
}