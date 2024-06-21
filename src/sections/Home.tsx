import React from 'react';
import Navbar from '../component/Navbar';
import './Home.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Arrow from '../component/Arrow';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './About';
import Archive from '../component/Archive';

const Home: React.FC = () => {
    const codeString = `
    if usually:
        grace.role = "senior @ the university of pennsylvania"
        grace.action = "pursues mse in data science & bse in computer science"
    elif every_now_and_then: # insta: @everynowthenn
        grace.role = "designer (and self-acclaimed chef)"
        grace.action = "runs a pop-up restaurant"
    else:
        grace.role = "21 y.o. screenager"
        # talking about "screenagers"...we're creating an exciting app–coming soon!
        grace.actions = [rockclimb, curate_spotify_playlists, solve_nyt_letter_boxed]
    `;

    return (
        <div>
            <Navbar />
            <div id="home" className="section">

                <h1>Grace Thanglerdsumpan</h1>
                <h5>Crafted in Bangkok, Thailand 📍 Based in Philadelphia</h5>
                <p>Nice to meet you! My name is Chanya Thanglerdsumpan, and I go by Grace.<br />I love working on hands-on projects that push the boundaries and applications of CS, data, and design.</p>
                <br />

                <div className="code-container">
                    <SyntaxHighlighter language="python" style={coy} className="small-font">
                        {codeString}
                    </SyntaxHighlighter>
                </div>

                <div className="image-container">
                    <img src={`${process.env.PUBLIC_URL}/img/homepage.png`} alt="Illustration of Grace" />
                    {/* <img src={`../../public/img/homepage.png`} alt="Illustration of Grace" /> */}
                </div>
            </div>
            <div id="projects" className="section">
                <h1 id="section-header"> Welcome to my project archive!</h1>
                <Archive></Archive>
            </div>
            <div id="about" className="section">
                <About></About>            
            </div>
            <Arrow />
            <footer className="footer">
                made with love by chanyagracet 🚀 🏵️
            </footer>
        </div>
    );
};

export default Home;