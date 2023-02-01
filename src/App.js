import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Contacto from './components/Contacto.jsx';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
