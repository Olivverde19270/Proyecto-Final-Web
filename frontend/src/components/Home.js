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
import web from '../images/web-projects.png';
import lander from "../images/HomePage.png";
import catflix from "../images/catflix.png";
import skills from "../images/skills.png";
import sp from "../images/spanish.png";
import en from "../images/america.png";
import pg from "../images/portugues.png";
import htmlDev from "../images/html.png";
import cssDev from "../images/css.png";
import webDev from "../images/web-dev.png";
import reactDev from "../images/react.png";
import expressDev from "../images/express-dev.png";
import eslintDev from "../images/eslint.png";
import webpackDev from "../images/webpack.png";
import contact from "../images/contactMe.png";

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
    <div className = "web-dev">
      <center>
        <br></br><br></br>
        <img src={ web } className = "who" alt = "web-projects"/>
        <h2>Lander Project</h2>
        <br></br>
        <h3>The Lander Project is a music-streaming platform that holds and implements <br></br>
        API technology and Database Structure. It develops  within a web environment</h3>
        <br></br><br></br>
        <div className ="landerContainer">
          <figure class = "lander-screen">
            <img src= {lander} alt="lander-icon"/>
          </figure>
          <h2>Implemented<br></br>Technologies</h2>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>Eslint</li>
          </ul>
        </div>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <h2>Catflix Project</h2>
        <br></br>
        <h3>The Catflix Project is a copy of an animal protection NGO Chilean video-streaming platform.<br></br>
        Chilean video-streaming platform. That gets financial resources from copying <br></br> famous streaming shows using animals instead of actors</h3>
        <br></br><br></br>
        <div className ="landerContainer">
          <figure class = "lander-screen">
            <img src= {catflix} alt="lander-icon"/>
          </figure>
          <h2>Implemented<br></br>Technologies</h2>
          <ul>
            <li>React</li>
            <li>Babel</li>
            <li>Webpack</li>
          </ul>
        </div>
        <br></br><br></br><br></br><br></br>
        <a href="https://github.com/Olivverde19270">
        <h2>Find more Projects HERE ⬇️</h2>
        </a>
      </center>
    </div>
    <div className = "realSkill">
      <center>
        <br></br><br></br>
        <img src= {skills} className = "who" alt="skills-icon"/>
        <br></br><br></br><br></br><br></br>
        <div className = "languages">
          <figure className = "socialItem language1">
            <img src={ sp } className = "galleryImage" alt = "Facebook"/>
          </figure>
          <figure className = "socialItem language2">
            <img src={ en } className = "galleryImage" alt = "Instagram"/>
          </figure>
          <figure className = "socialItem language3">
            <img src={ pg } className = "galleryImage" alt = "LinkedIn"/>
          </figure>
        </div>
        <div className  = "checken">
          <figure className = "skillCheck check1">
            <img src={ htmlDev } className = "galleryImage" alt = "htmlDev"/>
          </figure>
          <figure className = "skillCheck check2">
            <img src={ cssDev  } className = "galleryImage" alt = "cssDev "/>
          </figure>
          <figure className = "skillCheck check3">
            <img src={ webDev  } className = "galleryImage" alt = "webDev "/>
          </figure>
          <figure className = "skillCheck check4">
            <img src={ reactDev } className = "galleryImage" alt = "reactDev"/>
          </figure>
          <figure className = "skillCheck check5">
            <img src={ expressDev } className = "galleryImage" alt = "expressDev"/>
          </figure>
          <figure className = "skillCheck check6">
            <img src={ eslintDev } className = "galleryImage" alt = "eslintDev"/>
          </figure>
          <figure className = "skillCheck check7">
            <img src={ webpackDev } className = "galleryImage" alt = "webpackDev"/>
          </figure>
        </div>
        </center>
        <div className = "contact">
            <center>
                <br></br><br></br>
                <img src= {contact  } className = "who" alt="contact-icon"/>
                <div className = "socialMedia">
                  <figure className = "socialItem network1">
                    <a href="https://www.facebook.com/people/Oliver-Milian/100008653547975/">
                      <img src={ fb } className = "galleryImage" alt = "Facebook"/>
                    </a>
                  </figure>
                  <figure className = "socialItem network2">
                    <a href="https://www.instagram.com/olivverde/?hl=es-la">
                      <img src={ ig } className = "galleryImage" alt = "Instagram"/>
                    </a>
                  </figure>
                  <figure className = "socialItem network3">
                    <a href="https://www.linkedin.com/in/olivverde/">
                      <img src={ link } className = "galleryImage" alt = "LinkedIn"/>
                    </a>
                  </figure>
                  <figure className = "socialItem network4">
                    <a href="https://www.linkedin.com/in/olivverde/">
                      <img src={ git } className = "galleryImage" alt = "Github"/>
                    </a>
                  </figure>
                </div>
            </center>
        </div>
    </div>
  </div>

    )
}


 
export default Home;