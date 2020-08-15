import React from 'react';
import './MobileSkills.css';
import AndroidLLogo from './../../assets/img/skills/android.jpg'
import FlutterLogo from './../../assets/img/skills/flutter.png'
import ReactNativeLLogo from './../../assets/img/skills/react_native.png'


export default function MobileSkills(){
    return(
        <div className="MobileSkills">
            <h2>Mobile</h2>
            <div className="MobileSkillsArea">  
                <div className="MobileSkillsTitle">
                    <img src={AndroidLLogo} className="Logo2" alt="AndroidLLogo"/>  
                    <p>Android - Java</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="MobileSkillsTitle">
                    <img src={FlutterLogo} className="Logo3" alt="FlutterLogo"/>  
                    <p>Flutter</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="MobileSkillsTitle">
                    <img src={ReactNativeLLogo} className="Logo" alt="ReactNativeLLogo"/>  
                    <p>React Native</p>    
                </div>  
                <div class="bar basic" data-skill="Basic"></div>                                   
            </div>            
        </div>
    );
}