import logo from './logo.svg';
import './App.css';
import Alarm from './Alarm';
import Clock from './Clock';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Clock/>} />
          <Route path='/alarm' element={<Alarm/>} />
          <Route path='*' element={<Clock/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
