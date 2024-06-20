import React, { useState } from 'react';
import './IconMenu.css';

interface IconMenuProps {
    onImageSelect: (imgPath: string, imgAlt: string) => void;
}

const IconMenu: React.FC<IconMenuProps> = ({ onImageSelect }) => {
    const [selectedIcon, setSelectedIcon] = useState<string | null>('icon1');

    const handleClick = (imgPath: string, imgAlt: string, iconId: string) => {
        onImageSelect(imgPath, imgAlt);
        setSelectedIcon(iconId);
    };

    const getIconClass = (iconId: string) => {
        return selectedIcon === iconId ? 'icon-container selected' : 'icon-container';
    };

    return (
        <div>
            <div className="icon-row">
                <div className={getIconClass('icon1')} onClick={() => handleClick(`${process.env.PUBLIC_URL}/img/enat.jpg`, 'Icon 1', 'icon1')}>
                    <div className="icon-link">
                        <img src={`${process.env.PUBLIC_URL}/img/sulky-icon.png`} alt="Icon 1" className="icon" />
                    </div>
                </div>
                <div className={getIconClass('icon2')} onClick={() => handleClick(`${process.env.PUBLIC_URL}/img/philly.jpg`, 'Icon 2', 'icon2')}>
                    <div className="icon-link">
                        <img src={`${process.env.PUBLIC_URL}/img/elon-icon.png`} alt="Icon 2" className="icon" />
                    </div>
                </div>
                <div className={getIconClass('icon3')} onClick={() => handleClick(`${process.env.PUBLIC_URL}/img/boulder.jpg`, 'Icon 3', 'icon3')}>
                    <div className="icon-link">
                        <img src={`${process.env.PUBLIC_URL}/img/dance-icon.png`} alt="Icon 3" className="icon" />
                    </div>
                </div>
                <div className={getIconClass('icon4')} onClick={() => handleClick(`${process.env.PUBLIC_URL}/img/favfood.jpg`, 'Icon 4', 'icon4')}>
                    <div className="icon-link">
                        <img src={`${process.env.PUBLIC_URL}/img/fan-icon.png`} alt="Icon 4" className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconMenu;
