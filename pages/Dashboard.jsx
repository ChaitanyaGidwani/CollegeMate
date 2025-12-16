import React from 'react';
import Header from '../components/Dashboard/Header';
import StatCard from '../components/Dashboard/StatCard';
import AttendanceChart from '../components/Dashboard/AttendanceChart';
import GPTWidget from '../components/Dashboard/GPTWidget';
import QuizCard from '../components/Dashboard/QuizCard';
import { Box, TrendingUp, TrendingDown } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <Header
                title="Dashboard Overview"
                subtitle="overview of student attendance"
            />

            <div className="dashboard-grid">
                <div className="stats-row">
                    <StatCard
                        title="Total Class"
                        value="401"
                        type="primary"
                        trend="up"
                        icon={Box}
                    />
                    <StatCard
                        title="Present"
                        value="319"
                        trend="up"
                        icon={Box}
                    />
                    <StatCard
                        title="Absent"
                        value="82"
                        trend="down"
                        icon={Box}
                    />
                </div>

                <div className="charts-row">
                    <AttendanceChart />
                    <QuizCard />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
