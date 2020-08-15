import React from 'react';
import './Languages.css';

export default function Languages(){
    return(
        <div className="Languages">
            <h2>Languages</h2>
            <div className="LanguagesArea">            
                <p>Portuguese</p>
                <div class="bar expert" data-skill="Native"></div>
                <p>English</p>
                <div class="bar advanced" data-skill="Advanced"></div>
                <p>Spanish</p>
                <div class="bar intermediate" data-skill="Intermediate"></div>
            </div>            
        </div>
    );
}