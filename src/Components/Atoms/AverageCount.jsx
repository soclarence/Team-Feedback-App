function averageCount({feedback}) {

    // Calculate rating
    let average = feedback.reduce((acc, cur) => {
            return acc + cur.rate
    }, 0) / 20


    return(
        <div className=" ">
            <p className="mt-[-50px] text-[10rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] leading-relaxed font-bold text-left">{average}%</p>
        </div>
    )
}

export default averageCount;