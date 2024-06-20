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