import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import {  About, Footer, Header, Skills, Testimonials, Work} from './container/index'

import { Navbar } from './components/index'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contacts' element={<Footer />} />
          </Routes>
          <About />
          <Work />
          <Skills />
          <Footer />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
