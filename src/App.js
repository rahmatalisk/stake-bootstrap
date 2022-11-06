import logo from './logo.svg';
import './Components/GlobalStyle.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Wallet from './Components/Wallet/Wallet';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectDuration from './Components/SelectDuration/SelectDuration';
import Cost from './Components/Cost/Cost';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        <Route path='wallet' element={<Wallet/>}></Route>
        <Route path='wallet/duration' element={<SelectDuration/>}></Route>
        <Route path='wallet/duration/cost' element={<Cost/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
