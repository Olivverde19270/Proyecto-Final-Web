import React, { Component } from "react";
import './Home.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Me from '../images/Olivverde.jpeg';
import MyLogo from '../images/Olivverde-logo.png';
import myPortrait from '../images/portrait.jpeg';
import goddess from '../images/artist-sample.png';
import programmer from '../images/programmer.jpg';
import human from '../images/human.jpg';
import whom from '../images/who-s-olivverde.png';
import fb from '../images/fb-icon.png';
import ig from '../images/ig-icon.png';
import link from '../images/li-icon.png';
import git from '../images/git-icon.png';
import ux from '../images/ux-projects.png';
import basicing from '../images/basic-ing.png';
import paybc from '../images/whatsapp-paybc.png';
import egirl from '../images/e-girl.png';
import histream from '../images/HiStream.png';

const Greetings = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  if((currentHour > 0) && (currentHour < 13)){
    return "Good Morning Traveler 🌅";
  }
  if((currentHour > 12) && (currentHour < 19)){
    return "Good Afternoon Traveler 🌇";
  }
  else{
    return "Good Evening Traveler 🌙";
  }
  return currentHour;
}
const greet = Greetings()

const Home = () => {
  return(
  <div className="main">
    <ul className="header">
      <li><img src={ MyLogo } alt="Olivverde-Logo" className="logo"/></li>&nbsp&nbsp&nbsp&nbsp
      <li><a href="content" className="active">HOME</a></li>&nbsp
      <li><a href="/skills">SKILLS</a></li>&nbsp
      <li><a href="/achives">ACHIEVEMENT</a></li>&nbsp
      <li><a href="/contact">CONTACT</a></li>&nbsp
      <li><a href="/donate">DONATE</a></li>
    </ul>
    <div className="bg">
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>

      <center>
        <div className="content" id="content">
          <img src={ Me } alt="Olivverde" className="profile"/>
          <h2>
            <br></br>
            { greet }

          </h2>
          <br></br>
          <h3>
            <br></br><br></br><br></br>  
            "You feel a calming tranquility. You're filled with determination..."
          </h3>
          <div className="Introduction">
            <h3>
              Hey There! I'm Oliver, The owner of this little website, You look exhausted...
              Try to relax by checking around, you must find some interesting stuff about me!
            </h3>
          <br></br>
          </div>
        </div>
        <br></br><br></br>
        <br></br><br></br>
      </center>
    </div>
    <div className="skills" id="skills">  
      <center>
        <img src={ whom } className = "who" alt = "whom"/>
        <div className = "gallery">
          <figure className = "galleryItem Image1">
            <img src={ myPortrait } className = "galleryImage" alt = "Olivverde"/>
          </figure>
         <figure className = "galleryItem Image2">
            <img src={ goddess } className = "galleryImage" alt = "artistLabor"/>
          </figure>
          <figure className = "galleryItem Image3">
            <img src={ programmer } className = "galleryImage" alt = "programmerLabor"/>
          </figure>
          <figure className = "galleryItem Image4">
            <img src={ human } className = "galleryImage" alt = "humanLabor"/>
          </figure>
        </div>
        <br></br><br></br>
        <h4>"He is an icon, he is a legend and he is the moment..."</h4>
        <br></br><br></br>
        <h2>He also is a UVG Student, an Artist, a Programmer, but most importantly a HUMAN</h2>
        <div className = "socialMedia">
          <figure className = "socialItem network1">
            <img src={ fb } className = "galleryImage" alt = "Facebook"/>
          </figure>
          <figure className = "socialItem network2">
            <img src={ ig } className = "galleryImage" alt = "Instagram"/>
          </figure>
          <figure className = "socialItem network3">
            <img src={ link } className = "galleryImage" alt = "LinkedIn"/>
          </figure>
          <figure className = "socialItem network4">
            <img src={ git } className = "galleryImage" alt = "Github"/>
          </figure>
        </div>
      </center>   
    </div>
    <div className = "work">
      <center>
        <br></br><br></br>
        <img src={ ux } className = "who" alt = "ux-projects"/>
        <div className = "portfolio">
          <figure className = "UXitem work1">
            <img src={ basicing } className = "galleryImage" alt = "Basic-ing-Project"/>
          </figure>
          <figure className = "UXItem work2">
            <img src={ paybc } className = "galleryImage" alt = "WhatsAppPayBC-Project"/>
          </figure>
          <figure className = "UXItem work3">
            <img src={ egirl } className = "galleryImage" alt = "EGirl-Project"/>
          </figure>
          <figure className = "UXItem work4">
            <img src={ histream } className = "galleryImage" alt = "HiStream-Project"/>
          </figure>
        </div>
      </center>
    </div>
  </div>

    )
}


 
export default Home;