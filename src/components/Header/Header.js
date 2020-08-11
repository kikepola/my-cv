/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';

export default function header() {
  
  return (
    <div className="Header">
      <div class="Typewriter1">  
        <h2 className="Line">CLI - Command Line Interface Simulation</h2>                              
      </div>            
      <h2 className="Line">poladian:/$<b className="UnderLine">_</b></h2>            
    </div>
  );
  
}

