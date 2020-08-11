import React from  'react';
import './Experience.css'
import ItauLogo from './../../assets/img/itau.png';

export default function Experience(){
    return(
        <div className="Experience">
            <h2>Experience</h2>
            <div className="Itau">
                <img src={ItauLogo} className="ItauLogo" alt="ItauLogo"/>
                <div className="ExperienceContent">
                    <p className="ExperienceInstituteName">Itaú Unibanco</p>
                    <p className="ExperienceTitle">JR Operational Finance Analyst</p>
                    <p className="ExperienceYear">Aug 2019 – Present</p>
                    <p className="ExperienceTitle">Internship</p>
                    <p className="ExperienceYear">Oct 2018 – Aug 2019</p>
                </div>                
            </div>             
        </div>
    );
}