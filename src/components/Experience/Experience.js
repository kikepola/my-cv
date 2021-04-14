import React from  'react';
import './Experience.css'
import ItauLogo from './../../assets/img/itau.png';
import ArgoLogo from './../../assets/img/argo.png';

export default function Experience(){
    return(
        <div className="Experience">
            <h2>Experience</h2>
            <div className="ExperienceCard">
                <img src={ArgoLogo} className="ExperienceLogo" alt="ArgoLogo"/>
                <div className="ExperienceContent">
                    <p className="ExperienceInstituteName">Argo Solutions</p>
                    <p className="ExperienceTitle">Full Stack Developer</p>
                    <p className="ExperienceYear">Dec 2020 – Present</p>
                </div>                
            </div>  
            <div className="ExperienceCard">
                <img src={ItauLogo} className="ExperienceLogo" alt="ItauLogo"/>
                <div className="ExperienceContent">
                    <p className="ExperienceInstituteName">Itaú Unibanco</p>
                    <p className="ExperienceTitle">JR Operational Finance Analyst</p>
                    <p className="ExperienceYear">Aug 2019 – Dec 2020</p>
                    <p className="ExperienceTitle">Internship</p>
                    <p className="ExperienceYear">Oct 2018 – Aug 2019</p>
                </div>                
            </div>             
        </div>
    );
}