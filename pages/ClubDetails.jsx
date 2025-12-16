import React from 'react';
import Header from '../components/Dashboard/Header';
import ClubCard from '../components/Clubs/ClubCard';
import './ClubDetails.css';

const ClubDetails = () => {
    const clubs = [
        { name: 'GDG' },
        { name: 'CODECHEF' },
        { name: 'MINERVA' },
        { name: 'TRISHUL' }
    ];

    return (
        <div className="clubs-page">
            <Header title="Club details" />

            <div className="clubs-grid">
                {clubs.map((club) => (
                    <ClubCard key={club.name} name={club.name} />
                ))}
            </div>
        </div>
    );
};

export default ClubDetails;
