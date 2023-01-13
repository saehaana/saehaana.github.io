import React from 'react';

import './App.css';

import About from './components/About'
import Projects from './components/Projects'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    return (
    <div className ="main-container" id="root">
        <div className = "main-container-background">
            <img src={"./assets/indexBackground.jpg"} alt="Page Background"/>
        </div>
        <h1 className = "name">Ausawin Saehaan</h1>
        <p className = "title">Software Developer</p>
        <ul className = "navbar">
            <li><a href="https://saehaana.github.io/projects.html">Projects</a></li>
            <li><a href="https://saehaana.github.io/about.html">About</a></li>
            <li><a href="mailto:saehaana@gmail.com">Contact</a></li>
        </ul>
        <div className = "message-box">
            <p className = "message">
                Welcome. <br></br> <br></br>
                I'm a full-stack engineer from the Northern Virginia area. My desires are to innovate modern design and bring clean functionality. 
            </p>
        </div>
        <div className = "github">  <FontAwesomeIcon inverse icon= {faGithub} /> </div>
        <div className = "linkedin"> <FontAwesomeIcon inverse icon= {faLinkedin} /> </div>
        <div className = "resume">Resume</div>
        
        <About />
        <Projects />    
    </div>
    );
}

export default App;