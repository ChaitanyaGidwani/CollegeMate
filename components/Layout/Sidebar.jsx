import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart2,
  Folder,
  Users,
  User,
  Settings,
  LogOut,
  HelpCircle
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: BarChart2, label: 'Attendance', path: '/attendance' },
    { icon: Folder, label: 'Club details', path: '/clubs' },
    { icon: Users, label: 'Teachers info', path: '/teachers' },
  ];

  const bottomItems = [
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: LogOut, label: 'Logout', path: '/logout' },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <h1 className="logo-text">
          COLLEGEMATE
        </h1>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon className="nav-icon" size={20} />
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="bottom-menu">
        {bottomItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="nav-item"
          >
            <item.icon className="nav-icon" size={20} />
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}

        <div className="help-section">
          <NavLink to="/help" className="nav-item">
            <HelpCircle className="nav-icon" size={20} />
            <span className="nav-label">Help & Support</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
