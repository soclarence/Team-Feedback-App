function averageCount({feedback}) {

    // Calculate rating
    let average = feedback.reduce((acc, cur) => {
            return acc + cur.rate
    }, 0) / 20


    return(
        <div className=" ">
            <p className="mt-[-50px] text-[9.2rem] lg:text-[10.2rem] sm:text-[6rem] md:text-[7.2rem] leading-relaxed font-bold text-left">{average}%</p>
        </div>
    )
}

export default averageCount;