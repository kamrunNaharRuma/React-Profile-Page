import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Carousel from './Components/Carousel'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Project from './Components/Project'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import ReactSimplyCarouselExample from './Components/ReactSimplyCarouselExample';
// import ReactSimplyCarouselExample from './Components/ReactSimplyCarouselExample';




function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <hr /> */}
      <Navbar />
      <br />
      <Banner /> 
      <br />
      <ReactSimplyCarouselExample/>
      <br />
      <About />
      <br />
      <hr />
      <h1 className="skillheader">My SKills</h1>
      <hr />
      <Project />
      <hr />
      <Portfolio />
      <hr />
      <h1 id="contactnav" className="contact">Contact Information</h1>
      <hr />
      <Contact />

    </div>
  );
}

export default App;
