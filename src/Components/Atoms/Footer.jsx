import Logo from "./Img/Logo"

function Footer(){
    return(
        <div className="px-11 pt-40 pb-11">
            <div>
                <Logo
                    width="33"
                    height="19" />
                <p className="pt-6">
                    ©2022. Designed by <br /> Clarence. All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer;