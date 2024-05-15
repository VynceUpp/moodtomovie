import React from 'react';
import Navbar from '../components/Navbar';
import '../css/About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='aboutbox'>
        <h1>About Me</h1>
        <p>My name is Vincent</p>
        <p>I am a junior Frontend developer</p>
      </div>
      
    </div>
  )
}

export default About