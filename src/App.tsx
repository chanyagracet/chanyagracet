import React from 'react';
import Navbar from './component/Navbar';
// import Navbar from './src/componebar';
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Arrow from './component/Arrow'; // Import the Arrow component
import Card from './component/Card'; // Import the Card component


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
                <p>Nice to meet you! My name is Chanya Thanglerdsumpan, and I go by Grace.<br></br>I love working on hands-on projects that push the boundaries and applications of CS, data, and design.</p>
                <br></br>
                <div className="code-container">
                    <SyntaxHighlighter language="python" style={coy} className="small-font">
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <br></br>
                <div className="image-container">
                    <img src={`${process.env.PUBLIC_URL}/homepage.png`} alt="Illustration of Grace" />
                </div>

                {/* <div className="links">
                    <a href="resume.pdf">resumé</a>
                    <a href="https://www.linkedin.com/in/your-linkedin/">linkedin</a>
                    <a href="https://github.com/your-github/">github</a>
                </div>   */}
            </div>
            <div id="projects" className="section">
                <div className="text-container">
                    <p>From operating systems, databases, big data analytics, to full-stack development; I have learned and applied various skills to use in these projects.</p>
                </div>
                <div className="cards-container">
                    <Card></Card>
                    {/* <Card>Project 1: Description of project 1</Card>
                    <Card>Project 2: Description of project 2</Card>
                    <Card>Project 3: Description of project 3</Card>
                    <Card>Project 4: Description of project 4</Card> */}
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
