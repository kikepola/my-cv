import React from 'react';
import './Profile.css';
import GithubImg from './../../assets/img/github.png'
import LinkedinImg from './../../assets/img/linkedin.png'

export default function Profile(){
    return(
        <div className="Profile">            
            <div className="ProfileInfo">
                <h2>Henrique Ladeira Rosa Poladian</h2>
                <h3>Computer Engineer</h3>
                <p>henrique.poladian@gmail.com</p>
            </div>        
            <div className="LocationInfo">
                <p><b>From:</b> Cotia, São Paulo, Brazil</p>                
                <p><b>Birthday:</b> 17/07/1997</p>
                <a href="https://github.com/kikepola">
                    <img src={GithubImg} className="GithubImg" alt="GithubImg"/>
                    <p>https://github.com/kikepola</p>
                </a>   
                <a href="https://www.linkedin.com/in/henrique-poladian-270b56152">
                    <img src={LinkedinImg} className="LinkedinImg" alt="LinkedinImg"/>
                    <p>https://www.linkedin.com/in/henrique-poladian-270b56152</p>
                </a>                        
            </div>          
        </div>
    );
}