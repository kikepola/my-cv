import React from 'react';
import './HardwareSkills.css';
import ArduinoLogo from './../../assets/img/skills/arduino.jpg'
import RaspberrypiLogo from './../../assets/img/skills/raspberrypi.webp'
import MbedLogo from './../../assets/img/skills/mbed.png'


export default function HardwareSkills(){
    return(
        <div className="HardwareSkills">
            <h2>Hardware</h2>
            <div className="HardwareSkillsArea">  
                <div className="HardwareSkillsTitle">
                    <img src={ArduinoLogo} className="Logo2" alt="FlaskLogo"/>  
                    <p>Arduino</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 

                <div className="HardwareSkillsTitle">
                    <img src={RaspberrypiLogo} className="Logo2" alt="PHPlLogo"/>  
                    <p>Raspberry Pi</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 

                <div className="HardwareSkillsTitle">
                    <img src={MbedLogo} className="Logo" alt="CoreLogo"/>  
                    <p>MBed</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div>                                   
            </div>            
        </div>
    );
}