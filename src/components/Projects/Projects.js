import React from 'react';
import './Projects.css';
import logo from './../../assets/img/LogoArgro.png';

export default function Projects(props){
    return(
        <div className={props.class}>
            <h2>One Of My Projects</h2>
            <div>  
                <img src={logo} className="ProjectLogo"/>          
                <p>
                    ARgro is an app developed in flutter and unity, which came to facilitate the visualisation and development of civil construction projects in the Agribusiness environment. In addition to the calculations, we present a differential with the use of augmented reality to make the user experience much more immersive, allowing him to be able to visualize his project inside the place where the future construction will be.
                </p>
            </div>       
        </div>
    );
}