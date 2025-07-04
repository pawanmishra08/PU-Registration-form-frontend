import { Route, Routes } from 'react-router-dom';
import Applayout from './applayout';
import Students from './components/pages/students';
// import GoToDashboard from './components/GotoDashboard';
// import './App.css'

function App() {
  return (

    <Routes>
      <Route path ="/" element= {<Applayout/>} />
      <Route path="/students" element={<Students />} />
      <Route path="/gotodashboard" element={<Applayout />} />
    </Routes>
  )
}
export default App;
