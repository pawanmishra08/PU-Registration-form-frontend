import { useState, useEffect } from "react";
import { User } from "lucide-react";
import img from '../images/pu_logo.png';

const Header = () => {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [username, setUsername] = useState<string>("");

  // Get username from localStorage or login
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  return (
    <header className="flex justify-between items-center bg-black text-white px-10 py-3 shadow-md relative">

      {/* Left Section: Logo */}
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt="Purbanchal University Logo"
          className="h-14 w-14 object-contain"
        />
      </div>

      {/* Center Section: University Name */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center leading-tight flex flex-col">
        <span className="text-lg font-bold">Purbanchal University</span>
        <span className="text-sm text-gray-300">
          Office of the Controller of Examinations, Biratnagar
        </span>
      </div>

      {/* Right Section: Navbar + User */}
      <div className="flex items-center gap-8">

        {/* Navigation Bar */}
        <nav>
          <ul className="flex gap-6 list-none m-0 p-0">
            {["home", "about", "contact", "services"].map((item) => (
              <li
                key={item}
                onClick={() => setActiveNav(item)}
                className={`cursor-pointer font-medium border-b-2 transition-all duration-300 ${
                  activeNav === item
                    ? "text-sky-400 border-sky-400"
                    : "border-transparent hover:text-sky-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </nav>

        {/* User Icon + Username */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <User className="w-6 h-6 text-gray-300 group-hover:text-sky-400" />
          <span className="text-sm font-medium text-gray-200 group-hover:text-sky-400">
            {username ? username : "Guest"}
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;
