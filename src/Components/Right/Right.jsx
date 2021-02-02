import React from "react";

import Welcome from './../Welcome/Welcome.jsx';
import About from './../About/About.jsx';
import Resume from './../Resume/Resume.jsx';
import TimeL from './../Timeline/Timeline.jsx';
import Footer from './../Footer/Footer.jsx';

import './Right.css'

const Right = () => {
  return (
    <div className="right">
      <Welcome />
      <About />
      <Resume />
      <TimeL />
      <Footer />
    </div>
  );
};

export default Right;
