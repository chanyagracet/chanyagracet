import React, { useState } from 'react';
import './Card.css';

interface CardProps {
    title: string;
    description: string;
    onClick: () => void;
    id: string;
}

const Card: React.FC<CardProps> = ({ title, description, onClick, id }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onClick();
    };

    return (
        <div className={`card ${isOpen ? 'open' : ''}`} onClick={handleClick} id={id}>
            <div className="card-content">
                <h3>{title}</h3>
                {isOpen && <p>{description}</p>}
            </div>
        </div>
    );
};

export default Card;