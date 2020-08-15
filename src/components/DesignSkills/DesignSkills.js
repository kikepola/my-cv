import React from 'react';
import './DesignSkills.css';
import PsLogo from './../../assets/img/skills/ps.png'
import AILogo from './../../assets/img/skills/illustrator.png'
import XdLogo from './../../assets/img/skills/xd.png'
import PrLogo from './../../assets/img/skills/premier.jpg'
import Cinema4dLogo from './../../assets/img/skills/4d.png'
import MayaLogo from './../../assets/img/skills/maya.png'


export default function DesignSkills(){
    return(
        <div className="DesignSkills">
            <h2>Design/Prototype</h2>
            <div className="DesignSkillsArea">  

                <div className="DesignSkillsTitle">
                    <img src={PsLogo} className="Logo" alt="PsLogo"/>  
                    <p>Adobe Photoshop</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="DesignSkillsTitle">
                    <img src={AILogo} className="Logo" alt="AILogo"/>  
                    <p>Adobe Illustrator</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="DesignSkillsTitle">
                    <img src={XdLogo} className="Logo" alt="XdLogo"/>  
                    <p>Adobe XD</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div>   

                <div className="DesignSkillsTitle">
                    <img src={PrLogo} className="Logo" alt="PrLogo"/>  
                    <p>Adobe Premiere</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="DesignSkillsTitle">
                    <img src={Cinema4dLogo} className="Logo" alt="Cinema4dLogo"/>  
                    <p>Cinema 4D</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="DesignSkillsTitle">
                    <img src={MayaLogo} className="Logo" alt="MayaLogo"/>  
                    <p>Autodesk Maya</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div>                                 

            </div>            
        </div>
    );
}