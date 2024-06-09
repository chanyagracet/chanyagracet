import React, { useState } from 'react';
import './Card.css';

interface CardProps {
    title: String;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {

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

export default Card;