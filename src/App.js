import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Form from './pages/Form.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import './styles/App.css';

function App() {
  return (
    // Using HasRouter for Gh-page. 
    // Seems there is an issue with BrowserRouter and Gh-page.
    // !!! Normally BrowserRouter would be used. !!!
    <HashRouter> 
      <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/form/:id?' element={ <Form />} />
        <Route path='/portfolio' element={ <Portfolio />} />
        <Route path='/about' element={ <About />} />
      </Routes>

    </HashRouter>    
  );
}

export default App;
