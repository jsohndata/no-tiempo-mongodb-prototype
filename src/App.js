import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import Form from './pages/Form.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';

import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/form/:id?' element={ <Form />} />
        <Route path='/portfolio' element={ <Portfolio />} />
        <Route path='/about' element={ <About />} />
      </Routes>

    </BrowserRouter>    
  );
}

export default App;
