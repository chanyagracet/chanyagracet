import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../App.css'; // or your specific CSS file

const Archive: React.FC = () => {
    const [selectedCardContent, setSelectedCardContent] = useState('');
    const [selectedCard, setSelectedCard] = useState('');
    const [selectedImgPath, setSelectedImgPath] = useState('');
    const [selectedImgAlt, setSelectedImgAlt] = useState('');

    useEffect(() => {
        console.log('this is the selected card', selectedCard);
        handleImageClick(selectedCard);
      }, [selectedCard]); // Add project as a dependency to call handleImageClick whenever project changes
 
    function handleCardClick(project: string) {
        let output = document.getElementById('output');
        let selectedCardContent = '';
    
        switch (project) {
            case 'current':
                setSelectedCard('current');
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
                setSelectedCard('2023-2024');
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
                setSelectedCard('2022-2023');
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
                case '2021-2022':
                    setSelectedCard('2021-2022');
                    selectedCardContent = `
                    <div class="project">
                    <div class="project-title">Game-time! 2048 & Checkers</div>
                    <div class="project-tools">Java | GUI | OOP</div>
                    <div class="project-description">
                        Developed a clone of the famous 2048 and checkers game               </div>
                    </div>
                    `;
                    break;
            default:
                selectedCardContent = '';
        }
    
        let defaultContent = 'From operating systems, databases, big data analytics, to full-stack development; I have learned and applied various skills to use in these projects.';
        // let defaultContent = ``;
        let content = selectedCardContent || `<div class="project-description">${defaultContent}</div>`;

        if (output) {
            output.innerHTML = content;
        }   
    }

    function handleImageClick(project: string) {
        // let outputImg = document.getElementById('outputImg');
        // let selectedImgPath = '';
    
        switch (project) {
            case 'current':
                setSelectedImgPath(`pistachio.png`);
                setSelectedImgAlt(`Pistachio Mockup`);
                break;
            case '2023-2024':
                setSelectedImgPath(`pantrypal.png`);
                setSelectedImgAlt(`Pantry Pal Mockup`);
                // insert his link for pantry pal: https://drive.google.com/file/d/1iYg-Ax4GPbBBBu8a66mj4Px7oVHoIAUm/view?usp=sharing
                // have the bun float around as well
                // consider improving the img quality
                break;
            case '2022-2023':
                setSelectedImgPath(`pennbuddy.png`);
                setSelectedImgAlt(`Penn Buddy Mockup`);
                break;
            default:
                setSelectedImgPath('');
                setSelectedImgAlt('');
        }
        // console.log("this is img path", selectedImgPath);
        // console.log("this is img alt", selectedImgAlt);
    }

    return (
        <div className="content-container">

            <div className="image-archive-container">
                {selectedImgPath ? (
                    <img src={`${process.env.PUBLIC_URL}/img/${selectedImgPath}`} alt={selectedImgAlt} />
                ) : null}
            </div>
            <div className="text-container">
            
                <h1 id="archive-heading">the archives</h1>
                <div id="output">{defaultContent}</div>
            </div>
            <div className="cards-container">
                {/* <Card title="Recently [2024]" description="[agoda, wwbp]" onClick={() => handleCardClick('More projects coming soon!')} /> */}
                <Card title="Recently [2024]" description="[agoda, wwbp]" onClick={() => handleCardClick('current')} id="current"/>
                <Card title="2023-2024" description="[shopee]" onClick={() => handleCardClick('2023-2024')} id="prev" />
                <Card title="2022-2023" description="[spark, arun+]" onClick={() => handleCardClick('2022-2023')} id ="prev2"/>
                <Card title="2021-2022" description="[first year @upenn!]" onClick={() => handleCardClick('2021-2022')} id ="prev3"/>
                
            </div>
            <div className="click-text-container">
                {selectedCard === '' && (
                        <div className="click-message" id="white">
                            Click here to view my selected projects throughout the years
                        </div>
                    )}
            </div>
            {/* <div id="white">
                <p>click</p>
            </div> */}
        </div>
    );
};

let defaultContent = 'From operating systems, databases, big data analytics, to full-stack development; I have learned and applied various skills to use in these projects.';

export default Archive;