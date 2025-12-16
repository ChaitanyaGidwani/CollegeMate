import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = () => {
    return (
        <div className="app-container">
            <div className="retro-grid">
                <div className="grid-plane"></div>
            </div>
            <div className="horizon-glow"></div>

            <Sidebar />

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
