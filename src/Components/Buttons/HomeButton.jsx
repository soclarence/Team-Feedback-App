import { Link } from "react-router-dom";

function HomeButton(props) {
    return(
        <button className="transition ease-in-out delay-150 hover:bg-[#5D63CA] bg-mainBlue w-44 h-12 rounded-xl">
            <Link to="/get-started">
            <p className="text-white font-semibold text-[0.8rem]">{props.text}</p>
            </Link>
        </button>
    )
}

export default HomeButton;