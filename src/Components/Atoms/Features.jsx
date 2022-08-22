import Feature from "./Feature";
import featureInfo from "../../Data/Features";

function featureList(feature) {
    return <Feature 
                key={feature.id}
                img={feature.img}
                heading={feature.heading}
                body={feature.body}/>
}

function Features() {
    return(
        <div className=" flex flex-col items-center py-52 2sm:py-16 2sm:px-6">
            <div>
                <h1 className="font-bold 2sm:text-[1.8rem] text-[2rem]">A set of amazing <span className="text-mainBlue">features</span> </h1>
            </div>
            <div className="flex flex-row md:flex-wrap 2sm:flex-wrap space-x-20 justify-center py-11 2sm:space-x-0 2sm:space-y-21 2sm:py-16 2sm:w-[300px]">
                {featureInfo.map(featureList)}
            </div>
        </div>
    )
}

export default Features;