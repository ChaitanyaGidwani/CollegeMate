import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MoreVertical, ChevronDown } from 'lucide-react';
import './AttendanceChart.css';

const AttendanceChart = () => {
    const data = [
        { name: 'Absent', value: 20.4, color: '#F2C94C' }, // Yellow
        { name: 'Exempt', value: 0.2, color: '#56CCF2' }, // Blue
        { name: 'Present', value: 79.4, color: '#8e44ad' }, // Purple
    ];

    const totalPercentage = 79.55;

    return (
        <div className="chart-card">
            <div className="chart-header">
                <div>
                    <h3 className="chart-title">Attendance Overview</h3>
                    <p className="chart-subtitle">Attendance Performance Breakdown</p>
                </div>
                <div className="chart-actions">
                    <button className="dropdown-btn">
                        Monthly Reports <ChevronDown size={14} />
                    </button>
                    <button className="icon-btn-small">
                        <MoreVertical size={16} />
                    </button>
                </div>
            </div>

            <div className="chart-body">
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#27243d',
                                    borderRadius: '10px',
                                    border: 'none',
                                    color: '#fff'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="chart-center-text">
                        <span className="chart-percent">{totalPercentage}%</span>
                    </div>

                    {/* Labels pointing to segments - Simplified as absolute positioning or HTML overlay for specific labels like "absent 20.4%" if needed, or just Legend */}
                </div>

                <div className="chart-legend">
                    {data.map((item) => (
                        <div key={item.name} className="legend-item">
                            <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                            <span className="legend-text">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AttendanceChart;
