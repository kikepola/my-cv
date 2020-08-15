import React from 'react';
import './FrontendSkill.css';
import JSLogo from './../../assets/img/skills/JavaScript.png'
import HtmlLogo from './../../assets/img/skills/html.png'
import CssLogo from './../../assets/img/skills/css.jpg'
import ReactLogo from './../../assets/img/skills/react.png'
import AngularLogo from './../../assets/img/skills/angular.png'

export default function FrontendSkill(){
    return(
        <div className="FrontendSkill">
            <h2>Frontend</h2>
            <div className="FrontendSkillArea">  
                <div className="FrontendSkillTitle">
                    <img src={JSLogo} className="Logo" alt="JSLogo"/>  
                    <p>JavaScript</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 
                <div className="FrontendSkillTitle">
                    <img src={HtmlLogo} className="Logo" alt="HtmlLogo"/>  
                    <p>HTML</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 
                <div className="FrontendSkillTitle">
                    <img src={CssLogo} className="Logo2" alt="CssLogo"/>  
                    <p>CSS</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 
                <div className="FrontendSkillTitle">
                    <img src={ReactLogo} className="Logo2" alt="ReactLogo"/>  
                    <p>React</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 
                <div className="FrontendSkillTitle">
                    <img src={AngularLogo} className="Logo2" alt="AngularLogo"/>  
                    <p>Angular</p>    
                </div>  
                <div class="bar basic" data-skill="Basic"></div>            
            </div>            
        </div>
    );
}