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

const Greetings = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  if((currentHour > 0) && (currentHour < 13)){
    return "Good Morning TRAVELER 🌅";
  }
  if((currentHour > 12) && (currentHour < 19)){
    return "Good Afternoon TRAVELER 🌇";
  }
  else{
    return "Good Evening TRAVELER 🌙";
  }
  return currentHour;
}
const greet = Greetings()

const Home = () => {
  return(
  <div className="main">
    
    <ul className="header">
      <li><img src={ MyLogo } alt="Olivverde-Logo" class="logo"/></li>&nbsp&nbsp&nbsp&nbsp
      <li><a href="content" class="active">HOME</a></li>&nbsp
      <li><a href="/skills">SKILLS</a></li>&nbsp
      <li><a href="/achives">ACHIEVEMENT</a></li>&nbsp
      <li><a href="/contact">CONTACT</a></li>&nbsp
      <li><a href="/donate">DONATE</a></li>
    </ul>
    <div class="bg">
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>

      <center>
        <div class="content" id="content">
          <img src={ Me } alt="Olivverde" class="profile"/>
          <h2>
            <br></br>
            { greet }
          </h2>
          <br></br>
          <h3>
            "You feel a calming tranquility. You're filled with determination..."
          </h3>
          <div class="Introduction">
            <h3>
              Hey There! I'm Oliver, The owner of this little website, You look exhausted...
              Try to relax by checking around, you must find some interesting stuff!
            </h3>
          <br></br>
          </div>
        </div>
        <br></br><br></br>
        <br></br><br></br>
      </center>
    </div>
    <div class="skills" id="skills">  
      <center>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <div class="skillContainer">
        
          <img src={ myPortrait } alt="Olivverde-portrait" class="portrait"/> 
          <h2>WHO is OLIVER MILIAN?</h2>
          <h3>is a slut tbh</h3>
        </div>
      </center>   
    </div>
  </div>

    )
}


 
export default Home;