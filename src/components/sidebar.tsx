// import { BookOpen, Building, CalendarDays, GraduationCap, NotebookText, User, UserPlus } from "lucide-react";
// import { NavLink } from "react-router";

// export default function Sidebar() {
//     return (
//         <div
//             className="sidebar"
//             style={{
//                 backgroundColor: "rgb(12, 190, 36)",
//                 width: "250px",
//                 minHeight: "100vh",
//                 padding: "20px",
//                 boxSizing: "border-box",
//             }}
//         >
//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     height: 80,
//                     alignItems: "center",
//                     justifyContent: "center",
//                     marginBottom: "20px",
//                 }}
//             >
//                 <p
//                     style={{
//                         fontSize: "24px",
//                         fontWeight: "bold",
//                         letterSpacing: "1px",
//                         color: "#fff",
//                         textDecoration: "underline",
//                     }}
//                 >
//                     Registration Form
//                 </p>
//             </div>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//                 <li style={{ marginBottom: "15px" }}>
//                     <NavLink
//                         to="/Students"
//                         className={({ isActive }) => isActive ? "active-link" : "nav-link"}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "10px",
//                             color: "white",
//                             fontSize: "18px",
//                             padding: "10px",
//                             textDecoration: "none",
//                             borderRadius: "8px",
//                         }}
//                     >
//                         <User size={20} />
//                         Student Details
//                     </NavLink>
//                 </li>
//                                 <li style={{ marginBottom: "15px" }}>
//                     <NavLink
//                         to="/Registration"
//                         className={({ isActive }) => isActive ? "active-link" : "nav-link"}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "10px",
//                             color: "white",
//                             fontSize: "18px",
//                             padding: "10px",
//                             textDecoration: "none",
//                             borderRadius: "8px",
//                         }}
//                     >
//                         <UserPlus size={20} />
//                         Registration
//                     </NavLink>
//                 </li>
//                 <li style={{ marginBottom: "15px" }}>
//                     <NavLink
//                         to="/Department"
//                         className={({ isActive }) => isActive ? "active-link" : "nav-link"}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "10px",
//                             color: "white",
//                             fontSize: "18px",
//                             padding: "10px",
//                             textDecoration: "none",
//                             borderRadius: "8px",
//                         }}
//                     >
//                         <Building size={20} />
//                         Department
//                     </NavLink>
//                 </li>
//                 <li style={{ marginBottom: "15px" }}>
//                     <NavLink
//                         to="/Program"
//                         className={({ isActive }) => isActive ? "active-link" : "nav-link"}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "10px",
//                             color: "white",
//                             fontSize: "18px",
//                             padding: "10px",
//                             textDecoration: "none",
//                             borderRadius: "8px",
//                         }}
//                     >
//                         <GraduationCap size={20} />
//                         Program
//                     </NavLink>
//                 </li>
//                 <li style={{ marginBottom: "15px" }}>
//                     <NavLink
//                         to="/Faculty"
//                         className={({ isActive }) => isActive ? "active-link" : "nav-link"}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "10px",
//                             color: "white",
//                             fontSize: "18px",
//                             padding: "10px",
//                             textDecoration: "none",
//                             borderRadius: "8px",
//                         }}
//                     >
//                         <BookOpen size={20} />
//                         Faculty
//                     </NavLink>
//                 </li>
//                 <li style={{ marginBottom: "15px" }}>
//                     <NavLink
//                         to="/Course"
//                         className={({ isActive }) => isActive ? "active-link" : "nav-link"}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "10px",
//                             color: "white",
//                             fontSize: "18px",
//                             padding: "10px",
//                             textDecoration: "none",
//                             borderRadius: "8px",
//                         }}
//                     >
//                         <NotebookText size={20} />
//                         Course
//                     </NavLink>
//                 </li>
//                 <li style={{ marginBottom: "15px" }}>
//                     <NavLink
//                         to="/Semester"
//                         className={({ isActive }) => isActive ? "active-link" : "nav-link"}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "10px",
//                             color: "white",
//                             fontSize: "18px",
//                             padding: "10px",
//                             textDecoration: "none",
//                             borderRadius: "8px",
//                         }}
//                     >
//                         <CalendarDays size={20} />
//                         Semester
//                     </NavLink>
//                 </li>
//             </ul>
//         </div>
//     );
// }
