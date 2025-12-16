import React from 'react';
import Header from '../components/Dashboard/Header';
import SubjectCard from '../components/Attendance/SubjectCard';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Attendance.css';

const Attendance = () => {
    const summaryData = [
        { name: 'Present', value: 319, color: '#00f3ff' },
        { name: 'Absent', value: 82, color: '#ef4444' }
    ];

    const subjects = [
        { name: 'COA', percent: 80.05 },
        { name: 'MATHS IV', percent: 74.41 },
        { name: 'DS', percent: 69.5 },
        { name: 'PYTHON', percent: 78.5 },
        { name: 'DS LAB', percent: 98.08 },
        { name: 'COA LAB', percent: 51.90 },
        { name: 'TECHNICAL COMMUNICATION', percent: 100 },
        { name: 'DSTL', percent: 90 },
    ];

    return (
        <div className="attendance-page">
            <Header title="Attendance" />

            <div className="attendance-banner">
                <div className="banner-chart">
                    <ResponsiveContainer width={150} height={150}>
                        <PieChart>
                            <Pie
                                data={summaryData}
                                innerRadius={50}
                                outerRadius={70}
                                dataKey="value"
                                stroke="none"
                            >
                                {summaryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="banner-stats">
                    <div className="banner-stat-item">
                        <span className="stat-label">Present</span>
                        <span className="stat-value">319</span>
                    </div>
                    <div className="banner-stat-item">
                        <span className="stat-label">Absent</span>
                        <span className="stat-value">82</span>
                    </div>
                    <div className="banner-stat-item">
                        <span className="stat-label">Total</span>
                        <span className="stat-value">401</span>
                    </div>
                </div>
            </div>

            <div className="subjects-grid">
                {subjects.map(sub => (
                    <SubjectCard key={sub.name} subject={sub.name} percentage={sub.percent} />
                ))}
            </div>
        </div>
    );
};

export default Attendance;
