import React from 'react';
import './OtherSkills.css';
import AccessLogo from './../../assets/img/skills/access.png';
import ARCoreLogo from './../../assets/img/skills/arcore.jpg'
import CLogo from './../../assets/img/skills/c.png'
import CppLogo from './../../assets/img/skills/cpp.webp'
import CSharpLogo from './../../assets/img/skills/csharp.png'
import ExcelLogo from './../../assets/img/skills/excel.png'
import GitLogo from './../../assets/img/skills/git.png'
import WordLogo from './../../assets/img/skills/word.jpg'
import Javaogo from './../../assets/img/skills/java.png'
import Linuxogo from './../../assets/img/skills/linux.png'
import PythonLogo from './../../assets/img/skills/python.png'
import VbaLogo from './../../assets/img/skills/vba.png'


export default function OtherSkills(){
    return(
        <div className="OtherSkills">
            <h2>Other programming languages and technologys</h2>

            <div className="OtherSkillsArea">  

                <div className="OtherSkillsTitle">
                    <img src={CLogo} className="Logo2" alt="CLogo"/>  
                    <p>C</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="OtherSkillsTitle">
                    <img src={CppLogo} className="Logo2" alt="CppLogo"/>  
                    <p>C++</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="OtherSkillsTitle">
                    <img src={CSharpLogo} className="Logo2" alt="CSharpLogo"/>  
                    <p>C#</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="OtherSkillsTitle">
                    <img src={Javaogo} className="Logo2" alt="Javaogo"/>  
                    <p>Java</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="OtherSkillsTitle">
                    <img src={PythonLogo} className="Logo2" alt="PythonLogo"/>  
                    <p>Python</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 

                <div className="OtherSkillsTitle">
                    <img src={VbaLogo} className="Logo" alt="VbaLogo"/>  
                    <p>VBA - Visual Basic for Applications</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="OtherSkillsTitle">
                    <img src={Linuxogo} className="Logo" alt="Linuxogo"/>  
                    <p>Linux</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="OtherSkillsTitle">
                    <img src={GitLogo} className="Logo2" alt="GitLogo"/>  
                    <p>GIT</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 

                <div className="OtherSkillsTitle">
                    <img src={ARCoreLogo} className="Logo2" alt="ARCoreLogo"/>  
                    <p>Google ARCore (augmented reality)</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 

                <div className="OtherSkillsTitle">
                    <img src={AccessLogo} className="Logo2" alt="AccessLogo"/>  
                    <p>Microsoft Access</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 


                <div className="OtherSkillsTitle">
                    <img src={ExcelLogo} className="Logo2" alt="ExcelLogo"/>  
                    <p>Microsoft Excel</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 

                <div className="OtherSkillsTitle">
                    <img src={WordLogo} className="Logo2" alt="WordLogo"/>  
                    <p>Microsoft Word</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 

            </div>            
        </div>
    );
}