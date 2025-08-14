
import { Route, Routes } from 'react-router-dom';
import Applayout from './pages/applayout';
import Students_registration from './pages/students_registration';
// import GoToDashboard from './components/GotoDashboard';
// import './App.css'

function App() {
  return (

    <Routes>
      <Route path ="/" element= {<Applayout/>} >
      <Route path="/students_registration" element={<Students_registration />} />
      {/* <Route path="/gotodashboard" element={<Applayout />} /> */}
      </Route>
    </Routes>
  )
}
export default App;
