import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './SubjectCard.css';

const SubjectCard = ({ subject, percentage, trend = 'up' }) => {
    const data = [
        { name: 'Completed', value: percentage, color: '#00f3ff' }, // Cyan
        { name: 'Remaining', value: 100 - percentage, color: 'rgba(255, 255, 255, 0.1)' },
    ];

    // Specific colors per screenshot?
    // Some are Cyan, some Red/Pink. I'll make it prop or random if needed, but keeping Cyan for now to match Synthwave key color.
    // Actually screenshot shows Cyan for most.

    return (
        <div className="subject-card">
            <div className="subject-chart">
                <ResponsiveContainer width={80} height={80}>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={25}
                            outerRadius={35}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            <Cell fill="#00f3ff" /> {/* Cyan */}
                            <Cell fill="#ef4444" /> {/* Red backing? Or just transparent. Using Red per screenshot for the 'gap' if it means absent? Screenshot shows red ring segment. */}
                            {/* Wait, screenshot shows Cyan segment AND Red segment. It's not just gap. */}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                {/* SVG or simple overlay for the red part? 
            Actually Recharts handles multiple segments.
            If percentage is 80%, 80 is Cyan, 20 is Red. 
        */}
            </div>

            <div className="subject-info">
                <div className="subject-percentage">
                    {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    <span>{percentage}%</span>
                </div>
                <div className="subject-name">{subject}</div>
            </div>
        </div>
    );
};

// Modifying to handle the specific Look: 
// The screenshot shows a FULL ring where part is Cyan, part is Red.
// So Cell 0 is Cyan (Present), Cell 1 is Red (Absent).
// `percentage` is present.
const SubjectCardFixed = ({ subject, percentage }) => {
    const present = parseFloat(percentage);
    const absent = 100 - present;

    const data = [
        { name: 'Present', value: present, color: '#00f3ff' },
        { name: 'Absent', value: absent, color: '#ef4444' }
    ];

    return (
        <div className="subject-card">
            <div className="subject-chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={30}
                            outerRadius={45}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                            stroke="none"
                        >
                            <Cell fill={data[0].color} />
                            <Cell fill={data[1].color} />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="subject-details">
                <div className="subject-rate">
                    <TrendingUp size={18} className="trend-icon" />
                    <span>{percentage}%</span>
                </div>
                <h3 className="subject-title">{subject}</h3>
            </div>
        </div>
    )
}

export default SubjectCardFixed;
