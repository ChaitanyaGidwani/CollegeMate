import React from 'react';
import { TrendingUp, TrendingDown, Box } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ title, value, type = 'neutral', trend = 'up', icon: Icon = Box, className = '' }) => {
    const isUp = trend === 'up';

    return (
        <div className={`stat-card ${type} ${className}`}>
            <div className="stat-header">
                <div className="stat-icon-wrapper">
                    <Icon size={24} className="stat-icon-main" />
                </div>
                <div className="stat-trend">
                    {isUp ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                    <span className="stat-value-large">{value}</span>
                </div>
            </div>
            <div className="stat-label">{title}</div>
        </div>
    );
};

export default StatCard;
