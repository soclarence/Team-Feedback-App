

function EmployeeFeedback({item}) {
    return(
        <div className="w-96 sm:w-80 flex items-start space-x-1 pb-8">
            <div className="flex items-end">
                <img className="w-[40px] h-[40px]" src={item.img} alt="user" />

                <div className="ml-3 bg-gray-100 rounded-r-3xl rounded-tl-3xl">
                    <div className="pl-5 pt-5 text-sm flex space-x-1">
                        <p className="text-sm font-bold">{item.name}</p>

                        <div className="bg-mainOrange w-5 h-5 rounded-md">
                        <p className="text-[10px] text-center font-bold text-white">{item.rate}</p>

                        </div>
                    </div>
                    <p className="px-5 pt-1 pb-5">{item.reply}</p>
                </div>

            </div>
        </div>
    )
}

export default EmployeeFeedback;