import React from 'react';
import { Search, Bell } from 'lucide-react';
import './Header.css';

const Header = ({ title, subtitle }) => {
    return (
        <header className="dashboard-header">
            <div className="header-titles">
                <h1 className="page-title">{title}</h1>
                {subtitle && <p className="page-subtitle">{subtitle}</p>}
            </div>

            <div className="header-actions">
                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search subject" />
                </div>

                <div className="profile-actions">

                    <button className="icon-btn primary-bg">
                        <Bell size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
