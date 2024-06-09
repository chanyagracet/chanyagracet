import React from 'react';
import Navbar from './component/Navbar';
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Arrow from './component/Arrow';
import Card from './component/Card';

const App: React.FC = () => {
    const codeString = `
    if usually:
        grace.role = "senior @ the university of pennsylvania"
        grace.action = "pursues mse in data science & bse in computer science"
    elif every_now_and_then: # insta: @everynowthenn
        grace.role = "designer (and self-acclaimed chef)"
        grace.action = "runs a pop-up restaurant"
    else:
        grace.role = "21 y.o. screenager"
        grace.actions = [rockclimb, curate_spotify_playlists, izakaya_hopping]
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
                <br />
                <div className="image-container">
                    <img src={`${process.env.PUBLIC_URL}/homepage.png`} alt="Illustration of Grace" />
                </div>
            </div>
            <div id="projects" className="section">
                <div className="text-container">
                    <p>From operating systems, databases, big data analytics, to full-stack development; I have learned and applied various skills to use in these projects.</p>
                </div>
                <div className="cards-container">
                    <Card title="2021-2022" description="Pantry Pal: Javascript | Node.js | React | Axios | MySQL. Recipe-based grocery search engine for college students with a custom database." />
                    <Card title="2022-2023" description="PennOS: C | UNIX | Docker | Git. Built from scratch a clone of the 'terminal' with a working file system and kernel that supports CLI commands." />
                    <Card title="2023-2024" description="Product Design: 香包子. Rhino | Adobe Illustrator | Figma. Designed and sold Asian-inspired home goods with a profit of 1,000 USD." />
                    <Card title="Recently [2024]" description="More projects coming soon!" />
                </div>
            </div>
            <div id="about" className="section">
                <h2>About Me</h2>
                <p>More content about Grace...</p>
            </div>
            <Arrow />
        </div>
    );
};

export default App;