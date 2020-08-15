import React from 'react';
import './BackendSkill.css';
import FlaskLogo from './../../assets/img/skills/flask.png'
import PHPlLogo from './../../assets/img/skills/php.png'
import CoreLogo from './../../assets/img/skills/dotnet_core.png'
import NodetLogo from './../../assets/img/skills/node.png'

export default function BackendSkill(){
    return(
        <div className="BackendSkill">
            <h2>Backend</h2>
            <div className="BackendSkillArea">  
                <div className="BackendSkillTitle">
                    <img src={FlaskLogo} className="Logo" alt="FlaskLogo"/>  
                    <p>Flask</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 
                <div className="BackendSkillTitle">
                    <img src={PHPlLogo} className="Logo3" alt="PHPlLogo"/>  
                    <p>PHP</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 
                <div className="BackendSkillTitle">
                    <img src={CoreLogo} className="Logo2" alt="CoreLogo"/>  
                    <p>.NET Core</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 
                <div className="BackendSkillTitle">
                    <img src={NodetLogo} className="Logo3" alt="NodetLogo"/>  
                    <p>Node.js</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div>                   
            </div>            
        </div>
    );
}