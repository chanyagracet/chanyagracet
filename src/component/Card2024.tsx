import React, { useState } from 'react';
import './Card2024.css';

interface Card2024Props {
    title: String;
    description: string;
}

const Card2024: React.FC<Card2024Props> = ({ title, description }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`card ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <div className="card-content">
                <h3>{title}</h3>
                    {isOpen && <p>{description}</p>}
            </div>
        </div>
    );
};

export default Card2024;