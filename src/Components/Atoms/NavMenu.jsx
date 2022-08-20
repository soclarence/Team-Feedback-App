export default function NavMenu() {
    return(
        <div>
            <ul className="flex flex-row space-x-14 font-medium text-[0.8rem] text-gray-600 2sm:absolute 2sm:flex-col  2sm:items-center 2sm:top-[60px] 2sm:space-x-0 2sm:space-y-5 2sm:left-0 2sm:right-0 2sm:h-fit 2sm:w-screen 2sm:pt-6">
                <li className="2sm:text-white 2sm:hover:text-brightBlue transition ease-in-out duration-300 hover:font-bold hover:text-mainBlack cursor-pointer">Home</li>
                <li className="2sm:text-white 2sm:hover:text-brightBlue transition ease-in-out duration-300 hover:font-bold hover:text-mainBlack cursor-pointer">Product</li>
                <li className="2sm:text-white 2sm:hover:text-brightBlue transition ease-in-out duration-300 hover:font-bold hover:text-mainBlack cursor-pointer">Blog</li>
                <li className="2sm:text-white 2sm:hover:text-brightBlue transition ease-in-out duration-300 hover:font-bold hover:text-mainBlack cursor-pointer">Pricing</li>
                <li className="2sm:text-white 2sm:hover:text-brightBlue transition ease-in-out duration-300 hover:font-bold hover:text-mainBlack cursor-pointer">Contact</li>
            </ul>
        </div>
    )
}