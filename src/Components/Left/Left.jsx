import React from "react";

import data from './../../data';

import "./Left.css";


const Left = () => {

  return (
    <div className="left">
      <div className="profilepic-cont">
        <div className="pic">
          <img alt="shubh's lucious body" className="pic-cont" src={data.nav.navPic}></img>
        </div>
        <h2 className="name">{data.nav.name}</h2>
      </div>

      <div className="navlinks-cont">
        {data.nav.navLinks.map((data, i) => <a key={i} className="navlinks" href={data.link}>{data.alias}</a> )}
      </div>

      <div className="icon-cont">
        {data.nav.icons.map((data, i) => <a key={i} href={data.url}><div style={{color: data.iconColor}}className="icons">{data.symbol}</div></a>)}
      </div>
    </div>
  );
};

export default Left;
