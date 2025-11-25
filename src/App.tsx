import { Route, Routes } from "react-router-dom";
import Applayout from "./pages/applayout";
import StudentsRegistration from "./pages/StudentsRegistration";
import OnlinePayment from "./components/onlinepayment";
import Register from "./components/Register";

// Registration Step Pages
import PersonalInformation from "./pages/StudentsRegistration/personalInformation";
import Program from "./pages/StudentsRegistration/program";
import AcademicInformation from "./pages/StudentsRegistration/AcademicInformation";
import GuardianInformation from "./pages/StudentsRegistration/GuardianInformation";
import Voucher from "./pages/StudentsRegistration/voucher";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Applayout />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Onlinepayment" element={<OnlinePayment />} />

      <Route path="/StudentsRegistration" element={<StudentsRegistration />}>
        <Route index element={<PersonalInformation />} />

        {/*  nested routes */}
        <Route path="PersonalInformation" element={<PersonalInformation />} />
        <Route path="Program" element={<Program />} />
        <Route path="AcademicInformation" element={<AcademicInformation />} />
        <Route path="GuardianInformation" element={<GuardianInformation />} />
        <Route path="Voucher" element={<Voucher />} />
      </Route>
    </Routes>
  );
}

export default App;
