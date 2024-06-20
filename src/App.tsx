import React from 'react';
import Navbar from './component/Navbar';
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Arrow from './component/Arrow';
import Card from './component/Card';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './sections/About';
import Archive from './component/Archive';
import Directory from './sections/Directory';
import Home from './sections/Home';

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
        # talking about "screenagers"...we're creating an exciting app–coming soon!
        grace.actions = [rockclimb, curate_spotify_playlists, solve_nyt_letter_boxed]
    `;

    return (
        <Router>
            <Routes>
                <Route path = "/" element={<Directory />} />
                <Route path = "/home"  element={<Home />}>
                </Route>
            </Routes>
                
        </Router>
        
    );
};

export default App;