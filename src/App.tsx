
import { Route, Routes } from 'react-router-dom';
import Applayout from './pages/applayout';
import StudentsRegistration from './pages/StudentsRegistration';
import OnlinePayment from './components/onlinepayment';
import Register from './components/Register';
import './index.css';

function App() {
  return (

    <Routes>
      <Route path ="/" element= {<Applayout/>} >
      </Route>

      <Route path ="/StudentsRegistration" element={<StudentsRegistration />} />
      <Route path ="/Onlinepayment" element={<OnlinePayment />} />
      <Route path = "/Register" element={<Register/>} />
    </Routes>

  )
}
export default App;
