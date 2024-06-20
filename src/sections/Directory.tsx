import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Directory.css';

const Directory: React.FC = () => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div className="container">
            <h3>Grace Thanglerdsumpan</h3>
            <div className="icon-row">
                <div className='icon-container'>
                    <div className="icon-link" onClick={() => navigateTo('/home')}>
                        <img src={`${process.env.PUBLIC_URL}/img/cs.png`} alt="Icon 1" className="icon" />
                    </div>
                    <p> my personal website</p>
                </div>
                <div className='icon-container'>
                    <div className="icon-link">
                        <a href="https://chanyagracet.github.io/chanyagrace/" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/img/design.png`} alt="Icon 2" className="icon" />
                        </a>
                    </div>
                    <p> my design portfolio</p>
                </div>
                <div className='icon-container'>
                    <div className="icon-link">
                        <a href="https://drive.google.com/file/d/1jNtYOCp0SbMxIxUH4ffVOl4ejQ4n8ylN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/img/resume.png`} alt="Icon 3" className="icon" />
                        </a>
                    </div>
                    <p> my resume </p>
                </div>
                
            </div>
        </div>
    );
};

export default Directory;
