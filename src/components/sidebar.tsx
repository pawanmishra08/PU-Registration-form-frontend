import { NavLink } from "react-router-dom";
import {
  Contact,
  Layers,
  GraduationCap,
  CreditCard,
  UserPlus,
} from "lucide-react";

export default function Sidebar() {
  const linkClass =
    "flex items-center gap-2 text-white text-lg p-2 rounded-lg transition-all duration-200 hover:bg-green-700";
  const activeClass = "bg-green-800";

  return (
    <div className="bg-blue-600 w-[250px] min-h-screen p-5 box-border">
      {/* Header */}
      <div className="flex flex-col h-20 items-center justify-center mb-5">
        <p className="text font-bold tracking-wide text-white underline">
          Registration Form
        </p>
      </div>

      {/* Nav Links */}
      <ul className="list-none p-0 m-0 space-y-3">
        <li>
          <NavLink
            to="/StudentsRegistration/PersonalInformation"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <Contact size={20} />
            Personal Information
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/StudentsRegistration/Program"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <Layers size={20} />
            Program
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/StudentsRegistration/AcademicInformation"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <GraduationCap size={20} />
            Academic Information
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/StudentsRegistration/Voucher"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <CreditCard size={20} />
            Payment / Voucher
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/StudentsRegistration/GuardianInformation"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <UserPlus size={20} />
            Guardian Information
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
