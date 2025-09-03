
import { Route, Routes } from 'react-router-dom';
import Applayout from './pages/applayout';
import Students_registration from './pages/students_registration';
import OnlinePayment from './components/onlinepayment';

function App() {
  return (

    <Routes>
      <Route path ="/" element= {<Applayout/>} >
      </Route>

      <Route path ="/students_registration" element={<Students_registration />} />
      <Route path ="/onlinepayment" element={<OnlinePayment />} />
    </Routes>

  )
}
export default App;
