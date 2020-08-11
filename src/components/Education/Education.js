import React from 'react';
import './Education.css';
import IMTLogo from './../../assets/img/imt.jpg'


export default function Education(){
    return(
        <div className="Education">
            <h2>Education</h2>
            <div className="IMT">
                <img src={IMTLogo} className="IMTLogo" alt="IMTLogo"/>
                <div className="EducationContent">
                    <p className="EducationInstituteName">Centro Universitário do Instituto Mauá de Tecnologia</p>
                    <p className="EducationTitle">Engineer's degree, Computer Engineering</p>
                    <p className="EducationYear">2015 - 2020</p>
                </div>
            </div>            
        </div>
    );
}