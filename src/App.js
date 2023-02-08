import React from 'react';
import { Header, About, Experience, Services, Portfolio, Contact, Footer} from './containers';
import './App.css';

const App = () => {
  return (
    <div className='PPyatt gradient__bg'>
      <Header/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
