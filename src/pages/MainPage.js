import React from 'react';
import './MainPage.css';
import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import ProfileImage from './../assets/img/profile.jpg';

export default function MainPage(){
    return(
        <div>
            <Header />
            <div className='MainPage'>            
                <div className="MainPageContent">
                    <img src={ProfileImage} className="ProfileImage" alt="ProfileImage"/>
                    <Profile />
                    <div className="GridContent">
                        <Education />
                        <Experience />
                    </div>  
                </div>         
            </div>
        </div>
    );
}