import React from 'react';
import './Certifications.css';
import LetsCode from './../../assets/img/lets_code.png';
import SCRUMstudy from './../../assets/img/SCRUMStudy.png'


export default function Certifications(){
    return(
        <div className="Certifications">
            <h2>Licenses & Certifications</h2>
            <div className="Certification">
                <img src={LetsCode} className="LetsCodeLogo" alt="LetsCodeLogo"/>
                <div className="CertificationContent">
                    <p className="CertificationInstituteName">Python for Finance</p>
                    <p className="CertificationTitle">Let's Code Academy</p>
                    <p className="CertificationYear">Issued Jul 2019</p>
                </div>
            </div>   
            <div className="Certification">
                <img src={SCRUMstudy} className="SCRUMstudyLogo" alt="SCRUMstudyLogo"/>
                <div className="CertificationContent">
                    <p className="CertificationInstituteName">Scrum Fundamentals Certified (SFC)</p>
                    <p className="CertificationTitle">SCRUMstudy - Accreditation Body for Scrum and Agile</p>
                    <p className="CertificationYear">Issued May 2019</p>
                </div>
            </div>        
        </div>
    );
}