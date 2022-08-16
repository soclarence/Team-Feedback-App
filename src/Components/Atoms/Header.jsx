import Notification from "../Atoms/Img/Notification.svg"
import Logo from "../Atoms/Img/Logo.svg"
import Hr from "../Atoms/Img/Hr.png"

function Header() {
    return(
        <header className="w-auto backdrop-blur-md bg-white/30 pt-7 pb-5 flex flex-row items-center space-x-full fixed top-0 left-0 right-0 xl:right-0 xl:left-0">
            <div className="pl-20 sm:pl-3 flex-auto">
                <div className="flex flex-row space-x-4">
                    <div className="rounded-xl w-[50px] h-[50px] bg-brightBlue justify-center items-center flex">
                        <img className="w-[25px] " src={Logo} alt="PLEASE co" />
                    </div>
                    <div className="rounded-xl w-[50px] h-[50px] bg-brightBlue justify-center items-center flex">
                        <img className="w-[20px] " src={Notification} alt="notification icon" />
                    </div>
                </div>
            </div>
            <div className="pr-20 sm:pr-3">
                <img className="object-cover w-[65px] h-[65px] sm:h-[50px] sm:w-[50px]" src={Hr} alt="Hr-dp" />
            </div>
        </header>
    )
}

export default Header;