import React from 'react';
import './App.css';

//import created components
import Header from './Components/Header'
import Footer from './Components/Footer'
import Display from './Components/Display'

function App() {
  return (
    <div>
      <Header name="Hicks Online" place="Library"/>
      <Display/>
      <Footer/>
    </div>
  );
}

export default App;
