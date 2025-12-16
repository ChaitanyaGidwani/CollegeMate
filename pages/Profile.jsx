import React from 'react';
import Header from '../components/Dashboard/Header';
import { User, Mail, Book, Award, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import './Profile.css';

const Profile = () => {
    const student = {
        name: 'Chaitanya Gidwani',
        email: 'chaitanya.gidwani@example.com',
        collegeMail: 'chaitanya.g@collegemate.edu',
        branch: 'Computer Science & Engineering',
        semester: '6th Semester',
        gpa: '8.8',
        avatar: 'https://i.pravatar.cc/150?img=1'
    };

    const internalExams = [
        { subject: 'Computer Organization', code: 'CS301', marks: '28/30', status: 'Passed' },
        { subject: 'Data Structures', code: 'CS302', marks: '25/30', status: 'Passed' },
        { subject: 'Maths IV', code: 'MA301', marks: '22/30', status: 'Passed' },
        { subject: 'Python Programming', code: 'CS304', marks: '30/30', status: 'Passed' },
        { subject: 'Technical Comm.', code: 'HU301', marks: 'Pending', status: 'Pending' },
    ];

    return (
        <div className="profile-page">
            <Header title="Profile" subtitle="Student Details & Performance" />

            <div className="profile-grid">
                {/* Left Column: Personal Info */}
                <div className="profile-card info-card">
                    <div className="profile-header-img"></div>
                    <div className="profile-avatar-container">
                        <img src={student.avatar} alt={student.name} className="profile-avatar-lg" />
                    </div>

                    <div className="profile-main-info">
                        <h2 className="profile-name">{student.name}</h2>
                        <p className="profile-branch">{student.branch}</p>
                    </div>

                    <div className="info-list">
                        <div className="info-item">
                            <Mail size={18} className="info-icon" />
                            <div>
                                <label>Personal Email</label>
                                <p>{student.email}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail size={18} className="info-icon" />
                            <div>
                                <label>College Email</label>
                                <p>{student.collegeMail}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Book size={18} className="info-icon" />
                            <div>
                                <label>Semester</label>
                                <p>{student.semester}</p>
                            </div>
                        </div>
                        <div className="info-item highlight">
                            <Award size={18} className="info-icon" />
                            <div>
                                <label>Overall GPA</label>
                                <p className="gpa-text">{student.gpa}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Exam Status */}
                <div className="profile-card exams-card">
                    <div className="card-header">
                        <h3>Internal Exams Status</h3>
                        <span className="term-badge">Mid-Sem</span>
                    </div>

                    <div className="exams-list">
                        <div className="exams-header-row">
                            <span>Subject</span>
                            <span>Observed Marks</span>
                            <span>Status</span>
                        </div>

                        {internalExams.map((exam, index) => (
                            <div key={index} className="exam-row">
                                <div className="exam-subject">
                                    <div className="subject-icon-box">
                                        <FileText size={16} />
                                    </div>
                                    <div>
                                        <p className="subj-name">{exam.subject}</p>
                                        <p className="subj-code">{exam.code}</p>
                                    </div>
                                </div>
                                <div className="exam-marks">{exam.marks}</div>
                                <div className={`exam-status ${exam.status.toLowerCase()}`}>
                                    {exam.status === 'Passed' ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                                    <span>{exam.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
