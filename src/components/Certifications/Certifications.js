import React from 'react';
import './Certifications.css';
import LetsCode from './../../assets/img/lets_code.png';
import SCRUMstudy from './../../assets/img/SCRUMStudy.png'
import Alura from './../../assets/img/alura.jpg';
import Descola from './../../assets/img/descola.jpg';

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
            <div className="Certification">
                <img src={Alura} className="SCRUMstudyLogo" alt="SCRUMstudyLogo"/>
                <div className="CertificationContent">
                    <p className="CertificationInstituteName">Alura</p>
                    
                    <p className="CertificationTitle">Design Patterns C# II: Boas práticas de programação</p>
                    <p className="CertificationYear">Issued Mar 2021</p>
                    
                    <p className="CertificationTitle">Design Patterns C# I: Boas práticas de programação</p>
                    <p className="CertificationYear">Issued Mar 2021</p>
                    
                    <p className="CertificationTitle">SOLID com C#: Princípios da programação orientada a objetos</p>
                    <p className="CertificationYear">Issued Mar 2021</p>
                    
                    <p className="CertificationTitle">Kafka: Produtores, Consumidores e streams</p>
                    <p className="CertificationYear">Issued Jan 2021</p>
                    
                    <p className="CertificationTitle">NodeJS: Avançando em APIs REST com controle de versões</p>
                    <p className="CertificationYear">Issued Jan 2021</p>

                    <p className="CertificationTitle">NodeJS: Crie uma API REST padronizada e escalável</p>
                    <p className="CertificationYear">Issued Jan 2021</p>

                    <p className="CertificationTitle">NodeJS: Streaming de dados e Repositório</p>
                    <p className="CertificationYear">Issued Jan 2021</p>

                    <p className="CertificationTitle">ORM com NodeJS: API com Sequelize e MySQL</p>
                    <p className="CertificationYear">Issued Jan 2021</p>

                    <p className="CertificationTitle">HTTP: Entendendo a web por baixo dos panos</p>
                    <p className="CertificationYear">Issued Dec 2020</p>

                    <p className="CertificationTitle">Rest com NodeJS: API com Express e MySQL</p>
                    <p className="CertificationYear">Issued Dec 2020</p>
                </div>
            </div>  
            <div className="Certification">
                <img src={Descola} className="SCRUMstudyLogo" alt="SCRUMstudyLogo"/>
                <div className="CertificationContent">
                    <p className="CertificationInstituteName">Descola</p>
                    
                    <p className="CertificationTitle">Mentalidade Ágil: aprenda a planejar, priorizar e executar usando modelos ágeis</p>
                    <p className="CertificationYear">Issued Dec 2020</p>
                    
                    <p className="CertificationTitle">SQUAD: gestão ágil para times autogerenciáveis e multidisciplinares</p>
                    <p className="CertificationYear">Issued Dec 2020</p>                                        
                </div>
            </div>   
        </div>
    );
}