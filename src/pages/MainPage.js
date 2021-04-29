import React, {useLayoutEffect, useState} from 'react';
import './MainPage.css';
import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import ProfileImage from './../assets/img/profile.jpg';
import Certifications from './../components/Certifications/Certifications';
import Languages from './../components/Languages/Languages';
import FrontendSkill from './../components/FrontendSkill/FrontendSkill';
import BackendSkill from './../components/BackendSkill/BackendSkill';
import CloudSkills from './../components/CloudSkills/CloudSkills';
import HardwareSkills from './../components/HardwareSkills/HardwareSkills';
import DataBaseSkill from './../components/DataBaseSkill/DataBaseSkill';
import MobileSkills from './../components/MobileSkills/MobileSkills';
import DesignSkills from './../components/DesignSkills/DesignSkills';
import OtherSkills from './../components/OtherSkills/OtherSkills';
import Projects from './../components/Projects/Projects';

export default function MainPage(){
    const [width, height] = useWindowSize();

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);

        return size;
      }

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
                        <Certifications />  
                        {width > 1300
                        ? <div className="Divider"> <Languages class="LanguagesGrid"/> <Projects class="ProjectsGrid"/> </div>
                        : <Languages class="Languages"/> }     
                        {width <= 1300 ? <Projects class="Projects"/> :<div></div>}      
                    </div>  
                    <div className="TechSkills">                   
                        <h2>Technology Skills</h2>
                        <div className="GridContent">
                            <FrontendSkill />
                            <BackendSkill />
                            <CloudSkills />
                            <HardwareSkills />
                            <DataBaseSkill />
                            <MobileSkills />
                            <DesignSkills />
                            <OtherSkills />
                        </div>  
                    </div> 
                </div>         
            </div>
        </div>
    );
}