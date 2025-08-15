import { useState } from "react";
import "./Header.css";

const Header = () => {
    const [isclicked, SetIsClicked] = useState(false);

    return (
        <div className="header-container">
            {/* Left Section: Home Button */}
            <div className="header-left">
                <button className="header-button">Home</button>
            </div>

            {/* center seection: logo + Titile */}
            {/* <div className="header-title">
                <img src="./images/purbanchal_logo.svg"
                alt="Purbanchal University Logo"
                className="university-logo"
                />
            </div> */}

            {/* Center Section: Title */}
            <div className="header-text">
                <span className="university-name">Purbanchal University</span>
                <span className="office-name">Office of the Controller of Examinations, Biratnagar</span>
            </div>

            {/* Right Section: About Button */}
            <div className="header-right">
                <button className="header-button">About</button>
            </div>
        </div>
    );
};

export default Header;