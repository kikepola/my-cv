import React from 'react';
import './CloudSkills.css';
import AwsLogo from './../../assets/img/skills/aws.jpg'
import GCloudLogo from './../../assets/img/skills/gcloud.png'
import AzureLogo from './../../assets/img/skills/azure.png'
import FirebaseLogo from './../../assets/img/skills/firebase.png'
import HerokuLogo from './../../assets/img/skills/heroku.webp'


export default function CloudSkills(){
    return(
        <div className="CloudSkills">
            <h2>Cloud</h2>
            <div className="CloudSkillsArea">  
                <div className="CloudSkillsTitle">
                    <img src={AwsLogo} className="Logo2" alt="FlaskLogo"/>  
                    <p>Amazon Web Services</p>    
                </div>  
                <div class="bar basic" data-skill="Basic"></div> 
                <div className="CloudSkillsTitle">
                    <img src={AzureLogo} className="Logo3" alt="PHPlLogo"/>  
                    <p>Microsoft Azure</p>    
                </div>  
                <div class="bar basic" data-skill="Basic"></div> 
                <div className="CloudSkillsTitle">
                    <img src={GCloudLogo} className="Logo2" alt="CoreLogo"/>  
                    <p>Google Cloud Platform</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div> 
                <div className="CloudSkillsTitle">
                    <img src={FirebaseLogo} className="Logo" alt="NodetLogo"/>  
                    <p>Firebase</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div>     
                <div className="CloudSkillsTitle">
                    <img src={HerokuLogo} className="Logo" alt="HerokuLogo"/>  
                    <p>Heroku</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div>              
            </div>            
        </div>
    );
}