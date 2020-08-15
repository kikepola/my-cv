import React from 'react';
import './DataBaseSkill.css';
import MySQLLogo from './../../assets/img/skills/mysql.png'
import SqlServerLogo from './../../assets/img/skills/sql_server.jpg'
import PostgreSQLLogo from './../../assets/img/skills/postgres.png'


export default function DataBaseSkill(){
    return(
        <div className="DataBaseSkill">
            <h2>Database</h2>
            <div className="DataBaseSkillArea">  
                <div className="DataBaseSkillTitle">
                    <img src={MySQLLogo} className="Logo" alt="MySQLLogo"/>  
                    <p>MySQL</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 

                <div className="DataBaseSkillTitle">
                    <img src={SqlServerLogo} className="Logo" alt="SqlServerLogo"/>  
                    <p>Microsoft SQL Server</p>    
                </div>  
                <div class="bar advanced" data-skill="Advanced"></div> 

                <div className="DataBaseSkillTitle">
                    <img src={PostgreSQLLogo} className="Logo" alt="PostgreSQLLogo"/>  
                    <p>PostgreSQL</p>    
                </div>  
                <div class="bar intermediate" data-skill="Intermediate"></div>                                   
            </div>            
        </div>
    );
}