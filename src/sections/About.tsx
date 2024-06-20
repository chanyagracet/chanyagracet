import React, { useState } from 'react';
import './About.css';
import IconMenu from '../component/IconMenu';

const About: React.FC = () => {
    const [selectedImgPath, setSelectedImgPath] = useState(`${process.env.PUBLIC_URL}/img/enat.jpg`);
    const [selectedImgAlt, setSelectedImgAlt] = useState('every now & then');

    const handleImageSelect = (imgPath: string, imgAlt: string) => {
        setSelectedImgPath(imgPath);
        setSelectedImgAlt(imgAlt);
    };

    return (
        <div className="about-container">
            <div className="about-text-container">
                <div>
                    <h1>About Me</h1>
                    <p>
                        Hello again! <br />
                        I'm Grace. I spent the first 18 years of my life in the tropical heat of Bangkok, Thailand, and now I'm studying computer and data science at the University of Pennsylvania in Philadelphia.
                        <br />
                        Growing up, I have always loved designing artwork by hand. Combined with my interest in engineering, I decided to pursue computer science, where I can build exciting technology with creative designs.
                        <br />
                        At Penn, I explore diverse interests: I'm a TA for Big Data Analytics, a project lead for pro-bono consulting projects, and a product designer for Penn Spark.
                        <br />
                        In my free time, you can always find me bouldering, curating new playlists, walking my dog (his name is Elon!), or making Trader Joe’s runs for our pop-up restaurant called every now & then.
                    </p>
                    <IconMenu onImageSelect={handleImageSelect} />
                </div>
            </div>
            <div className="about-img-container">
                {selectedImgPath && (
                    <div>
                        <img src={selectedImgPath} alt={selectedImgAlt} className="selected-icon" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
