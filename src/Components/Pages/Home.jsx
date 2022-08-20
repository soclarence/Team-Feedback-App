import HeroSection from "../Atoms/HeroSection";
import Features from "../Atoms/Features";
import redirect from "../Atoms/Img/redirect";
import Footer from "../Atoms/Footer";
import Navbar from "../Atoms/Navbar";

function Home() {
    
    return <div className=" min-w-screen-lg overflow-hidden">
        <Navbar />
        <div className="w-92 2sm:px-6">
            <HeroSection />
            <Features />
            <div className="flex flex-col py-4">
                <h1 className="font-semibold text-[3rem] 2sm:text-[1.5rem] px-28 2sm:px-1 text-[#666666]">
                    Lorem ipsum dolor sit amet, consectetur     adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna     aliqua. Ut enim ad minim veniam, quis   nostrud exercitation ullamco 
                </h1>
                <button className="flex flex-row items-center">
                    <p className="text-[3rem] 2sm:text-[1.5rem] text-left text-mainBlack pt-5 px-28 2sm:px-1 font-semibold">Get Started</p>
                    <div className="ml-[-92px] 2sm:ml-[11px] mt-6">{redirect}</div>
                </button>
            </div>
        </div>
        <Footer />
    </div>
}

export default Home;