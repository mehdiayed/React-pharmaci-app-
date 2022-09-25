import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
import ours from "../assets/ours.jpg"
import AnimatedText from 'react-animated-text-content';
import "../styles/charts.min.css"
import 'charts.css';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ours})` }}
      ></div>
      <div className="aboutBottom">
        <h1 > ABOUT US</h1>
        
        <br></br>
        <p>
          We're Safwen and Mehdi , two motivated developers who tried to build this pharmacy management app from scratch . We tried to learn React,Express,MongoDB and NodeJS all at once xD! We've been successful ,we solved so many problems but we also made mistakes. But that's what developement is about at the first place:NEVER GIVING UP! We tried our best to reach this level and we are proud of what we achieved so far(still long way to go). 
          This work wasn't possible if we didn't work together as a solid team. And Like they say :<AnimatedText

 type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
"Alone we can do so little , together we can do so much."
</AnimatedText>
        </p>
      
      </div>
    </div>
  );
}

export default About;
