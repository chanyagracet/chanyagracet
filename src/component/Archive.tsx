import React, { useState } from 'react';
import Card from './Card';
import '../App.css'; // or your specific CSS file

const Archive: React.FC = () => {
    const [selectedCardContent, setSelectedCardContent] = useState('');

    function handleCardClick(project: string) {
        let output = document.getElementById('output');
        let selectedCardContent = '';
    
        switch (project) {
            case 'current':
                selectedCardContent = `
                    <div class="project">
                        <div class="project-title">Pistachios</div>
                        <div class="project-tools">Figma</div>
                        <div class="project-description">
                            Social forum for users to share niche opinions through polls. Planned release in Fall 2024.
                        </div>
                    </div>
                    <div class="project">
                        <div class="project-title">Pennstagram</div>
                        <div class="project-tools">Javascript | Node.js | React | Axios | MySQL | Apache Spark | LLM</div>
                        <div class="project-description">
                            Built from scratch an Instagram-clone with NLP, LLM, Social Rank, and chat and friend request features.
                        </div>
                    </div>
                    <div class="project">
                        <div class="project-title">Data Mining: Uber & Lyft</div>
                        <div class="project-tools">Python | Pandas | R | NumPy</div>
                        <div class="project-description">
                            Statistical modeling of ride-sharing fare fluctuations, using regression, Random Forest, XGBoost, and Neural Network.
                        </div>
                    </div>
                `;
                break;
            case '2023-2024':
                selectedCardContent = `
                <div class="project">
                <div class="project-title">Pantry Pal</div>
                <div class="project-tools">Javascript | Node.js | React | Axios | MySQL</div>
                <div class="project-description">
                    Recipe-based grocery search engine for college students with a custome database.
                </div>
            </div>
            <div class="project">
                <div class="project-title">PennOS</div>
                <div class="project-tools">C | UNIX | Docker | Git</div>
                <div class="project-description">
                    Built from scratch a clone of the terminal with a working file system and kernel that supports CLI commands.
                </div>
            </div>
            <div class="project">
                <div class="project-title">Product Design: 香包子</div>
                <div class="project-tools">Rhino | Adobe Illustrator | Figma</div>
                <div class="project-description">
                Designed and sold asian-inspired home goods with a profit of 1,000 USD. <br>
                Continuation: Freelance Designer @ <a href="https://www.instagram.com/lumpy_studios/">Lumpy Studios</a>
                </div>
            </div>
                `;
                break;
            case '2022-2023':
                selectedCardContent = `
                <div class="project">
                <div class="project-title">Penn Buddy</div>
                <div class="project-tools">Javascript | Node.js | React | Axios | MongoDB</div>
                <div class="project-description">
                    Developed a ridesharing and traveling platform for students.                </div>
                </div>
                <div class="project">
                    <div class="project-title">Fake News Detection</div>
                    <div class="project-tools">Python | Pandas | NumPy</div>
                    <div class="project-description">
                    	Engineered an ML and NLP model to analyze over 70,000 news headlines to detect fake news with 90.1% accuracy
                    </div>
                </div>
                `;
                break;
            default:
                selectedCardContent = '';
        }
    
        let defaultContent = 'From operating systems, databases, big data analytics, to full-stack development; I have learned and applied various skills to use in these projects.';
        let content = selectedCardContent || `<div class="project-description">${defaultContent}</div>`;

        if (output) {
            console.log(content)
            output.innerHTML = content;
        }   
    }

    return (
        <div className="content-container">

            <div className="image-archive-container">
                    <img src={`${process.env.PUBLIC_URL}/pistachio.png`} alt="Illustration of Grace" />
            </div>
            <div className="text-container">
            
                <h1 id="archive-heading">the archives</h1>
                <div id="output">{defaultVal}</div>
            </div>
            <div className="cards-container">
                {/* <Card title="Recently [2024]" description="[agoda, wwbp]" onClick={() => handleCardClick('More projects coming soon!')} /> */}
                <Card title="Recently [2024]" description="[agoda, wwbp]" onClick={() => handleCardClick('current')} id="current"/>
                <Card title="2023-2024" description="[shopee]" onClick={() => handleCardClick('2023-2024')} id="prev" />
                <Card title="2022-2023" description="[spark, arun+]" onClick={() => handleCardClick('2022-2023')} id ="prev2"/>
                <Card title="2021-2022" description="[first year @upenn!]" onClick={() => handleCardClick('')} id ="2021-prev3"/>
            </div>
        </div>
    );
};

const defaultVal = 'From operating systems, databases, big data analytics, to full-stack development; I have learned and applied various skills to use in these projects.';


export default Archive;