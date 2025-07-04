import { useState } from "react";
import { Search } from "lucide-react";
import "./Header.css";

const Header = () => {
    const[isclicked, SetIsClicked] = useState(false);

    return (
       <div className="header-container">
          <div className="header-title">
              <span className="university-name">Purbanchal University</span>
              <span className="office-name">Office of the Controller of Examinations, Biratnagar</span>
            </div>


            {/* <div className="search-container">
                <Search width= {16} height={16} className="icon-search"/>
                <input placeholder="type here..."/>
            </div> */}
        </div>
    );
};

export default Header;