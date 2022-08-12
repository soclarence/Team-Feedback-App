import Notification from "../Atoms/Img/Notification.svg"
import Logo from "../Atoms/Img/Logo.svg"
import Hr from "../Atoms/Img/Hr.png"

function Header() {
    return(
        <div className="pt-8 flex flex-row items-center space-x-full">
            <div className="flex-auto">
                <div className="flex flex-row space-x-4">
                    <div className="rounded-xl w-[50px] h-[50px] bg-brightBlue justify-center items-center flex">
                        <img className="w-[25px] " src={Logo} alt="PLEASE co" />
                    </div>
                    <div className="rounded-xl w-[50px] h-[50px] bg-brightBlue justify-center items-center flex">
                        <img className="w-[20px] " src={Notification} alt="notification icon" />
                    </div>
                </div>
            </div>
            <div>
                <img className="object-cover w-[65px] h-[65px]" src={Hr} alt="Hr-dp" />
            </div>
        </div>
    )
}

export default Header;