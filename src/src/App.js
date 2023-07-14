import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Health from './routes/Health';
import Applications from './routes/Applications';
import Leftbar from './components/Leftbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        {/* <div className='home'>
          <Leftbar/>  
          <div className='homeContainer'>
            <Navbar/>
          </div>
        </div> */}

        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path='/health' element={<Health />}></Route>
        </Routes>
        <Routes>
          <Route path='/application' element={<Applications />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
