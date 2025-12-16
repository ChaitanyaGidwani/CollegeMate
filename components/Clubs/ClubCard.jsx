import React from 'react';
import './ClubCard.css';

const ClubCard = ({ name }) => {
    return (
        <div className="club-card">
            <div className="club-card-top"></div>
            <div className="club-card-content">
                <h2 className="club-name">{name}</h2>
            </div>
        </div>
    );
};

export default ClubCard;
