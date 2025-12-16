import React, { useState } from 'react';
import Header from '../components/Dashboard/Header';
import {
    GraduationCap,
    Award,
    BookOpen,
    Briefcase,
    Mail,
    Phone,
    MapPin,
    Star,
    FileText,
    Trophy,
    Users,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import './TeachersInfo.css';

const TeachersInfo = () => {
    const [expandedTeacher, setExpandedTeacher] = useState(null);

    const teachers = [
        {
            id: 1,
            name: 'Aditya Tandon',
            designation: 'Assistant Professor (Senior Scale) - ABES Engineering College',
            department: 'Computer Science & Engineering',
            specialization: 'YouTube Educator | 12+ Yrs Teaching | PhD Scholar | Founder - C 4 Yourself | Mentor & Speaker',
            email: 'adityat1988@outlook.com',
            phone: '8750006999',
            location: 'Ghaziabad, Uttar Pradesh, India',
            avatar: '/src/assets/teachers/aditya_tandon.png',
            summary: "I'm an educator, mentor, and content creator on a mission to make tech education accessible, inclusive, and impactful—both inside and outside the classroom. With 12+ years of experience in teaching Computer Science, I've had the privilege of guiding thousands of learners across undergraduate and postgraduate programs. I'm currently pursuing a Ph.D. in Computer Science & Engineering, deepening my research in emerging technologies and their role in digital learning.",
            youtubeChannel: 'C 4 Yourself with 3,30,000+ subscribers',
            education: [
                {
                    degree: 'Doctor of Philosophy - PhD, Computer Science and Engineering',
                    institution: 'Quantum University',
                    year: '2020 - 2023',
                    specialization: 'Computer Science and Engineering'
                },
                {
                    degree: 'Master of Technology (M.Tech.), Computer Science',
                    institution: 'Amity University Noida',
                    year: '2011 - 2013',
                    specialization: 'Computer Science'
                },
                {
                    degree: 'Bachelor of Technology - BTech, Computer Science',
                    institution: 'Rajasthan Technical University, Kota',
                    year: 'July 2006 - August 2010',
                    specialization: 'Computer Science'
                }
            ],
            certifications: [
                'Programming for Everybody (Getting Started with Python)',
                'Introduction to Artificial Intelligence (AI)',
                'Python Data Structures',
                '[PCEP-30-02] PCEP™ – Certified Entry-Level Python Programmer'
            ],
            achievements: [
                'Best Professor in Information Technology',
                'YouTube Educator with 3,30,000+ subscribers on "C 4 Yourself" channel',
                'Founder of "C 4 Yourself" - Making tech education accessible to all',
                '12+ years of teaching experience across multiple institutions',
                'PhD Scholar in Computer Science & Engineering',
                'Mentor & Speaker in tech education domain',
                'Expert in Digital & distance education'
            ],
            publications: [
                {
                    title: 'A Comprehensive Survey on Ransomware Attack: A Growing Havoc Cyberthreat',
                    journal: 'Research Publication',
                    year: '2023'
                },
                {
                    title: 'Location based secure energy efficient cross layer routing protocols for IOT enabling technologies',
                    journal: 'Research Publication',
                    year: '2022'
                },
                {
                    title: 'Realization of absorber, reflector and transmitter using single photonic structure',
                    journal: 'Research Publication',
                    year: '2021'
                },
                {
                    title: 'An Approach to Brain Tumor Segmentation and Severity Analysis using Particle Swarm Optimization',
                    journal: 'Research Publication',
                    year: '2020'
                },
                {
                    title: 'Classification and analysis of security attacks in WSNs and IEEE 802.15.4 standards - A survey',
                    journal: 'Research Publication',
                    year: '2019'
                }
            ],
            experience: [
                {
                    role: 'Assistant Professor of Computer Science',
                    organization: 'ABES Engineering College',
                    duration: 'May 2025 - Present (8 months)',
                    location: 'Ghaziabad, Uttar Pradesh, India'
                },
                {
                    role: 'Educator',
                    organization: 'YouTube - C 4 Yourself Channel',
                    duration: 'March 2017 - Present (8 years 10 months)',
                    location: 'India',
                    details: 'YouTube Channel "C 4 Yourself" with 3,30,000+ subscribers'
                },
                {
                    role: 'Assistant Professor (Distance and Online Education)',
                    organization: 'Sharda University',
                    duration: 'December 2023 - May 2025 (1 year 6 months)',
                    location: 'Greater Noida',
                    courses: 'Digital Electronics & Computer Organization, Introduction to IoT, Computer Architecture & Organization, Java Programming, Mobile Application Development, Data Structures using C, Ethics & Social Implications of AI'
                },
                {
                    role: 'Assistant Professor',
                    organization: 'Inderprastha Engineering College',
                    duration: 'May 2023 - December 2023 (8 months)',
                    location: 'Ghaziabad, Uttar Pradesh, India'
                },
                {
                    role: 'Assistant Professor',
                    organization: 'Krishna Engineering College - India',
                    duration: 'July 2019 - May 2023 (3 years 11 months)',
                    location: 'Ghaziābād Area, India',
                    details: 'Department of Computer Science Engineering'
                },
                {
                    role: 'Assistant Professor',
                    organization: 'Ch. Brahm Prakash Government Engineering College, Jaffarpur',
                    duration: 'October 2013 - July 2018 (4 years 10 months)',
                    location: 'Jaffarpur, New Delhi',
                    details: 'Teaching, time table incharge, minor and major project coordinator, member of cultural committee, training & placement committee, anti-ragging committee'
                }
            ],
            courses: [
                'Computer Organization & Architecture',
                'Data Structures',
                'Python Programming',
                'Java Programming',
                'Mobile Application Development',
                'Introduction to IoT',
                'Digital Electronics',
                'Ethics & Social Implications of AI'
            ],
            topSkills: [
                'Computer Science Education',
                'Higher Education Teaching',
                'Content Development'
            ],
            languages: ['Hindi', 'English'],
            rating: 4.9,
            students: 3300
        },
        {
            id: 2,
            name: 'Apoorva Singh',
            designation: 'Assistant Professor at ABES-EC | UGC Net Certified',
            department: 'Computer Science & Engineering',
            specialization: 'Higher Education Teaching, Research Skills, Data Analysis',
            email: 'apoorva.singh@abes.ac.in',
            phone: '+91 98765 43211',
            location: 'Ghaziabad, Uttar Pradesh, India',
            avatar: '/src/assets/teachers/apoorva_singh.png',
            summary: 'UGC Net Certified Assistant Professor with expertise in Higher Education Teaching, Research Skills, and Data Analysis. Currently serving in the CSE department at ABES Engineering College.',
            education: [
                {
                    degree: 'Master\'s degree, Computer Science',
                    institution: 'Thapar Institute of Engineering and Technology',
                    year: '2017 - 2019',
                    specialization: 'Computer Science'
                },
                {
                    degree: 'Bachelor\'s Degree, Information Technology',
                    institution: 'Quantum School of Technology',
                    year: '2011 - 2015',
                    specialization: 'Information Technology'
                }
            ],
            topSkills: [
                'Higher Education Teaching',
                'Research Skills',
                'Data Analysis'
            ],
            achievements: [
                'UGC Net Certified',
                'Assistant Professor in CSE department, DSA specialization',
                'Experience across multiple prestigious institutions',
                'Strong background in research and data analysis',
                'Expertise in higher education teaching methodologies',
                'Contributed to student development at various institutions'
            ],
            publications: [
                {
                    title: 'Research in Computer Science and Engineering',
                    journal: 'Academic Research Publication',
                    year: '2023'
                },
                {
                    title: 'Data Analysis Techniques in Modern Computing',
                    journal: 'Research Journal',
                    year: '2022'
                }
            ],
            experience: [
                {
                    role: 'Assistant Professor',
                    organization: 'ABES Engineering College',
                    duration: 'July 2025 - Present (6 months)',
                    location: 'Ghaziabad, Uttar Pradesh, India',
                    details: 'Assistant Professor in CSE department, DSA'
                },
                {
                    role: 'Assistant Professor',
                    organization: 'Quantum University',
                    duration: 'September 2023 - March 2025 (1 year 7 months)',
                    location: 'Roorkee, Uttarakhand, India'
                },
                {
                    role: 'Assistant Professor',
                    organization: 'Dev Bhoomi Group of Institutions, Saharanpur',
                    duration: 'December 2022 - August 2023 (9 months)',
                    location: 'Saharanpur, Uttar Pradesh, India'
                },
                {
                    role: 'Student',
                    organization: 'Thapar Institute of Engineering and Technology',
                    duration: 'August 2017 - August 2019 (2 years 1 month)',
                    location: 'Patiala Area, India'
                },
                {
                    role: 'Technical Recruiter',
                    organization: 'Diverse Lynx',
                    duration: 'January 2016 - February 2016 (2 months)',
                    location: 'Noida, Uttar Pradesh, India'
                }
            ],
            courses: [
                'Data Structures and Algorithms',
                'Computer Science Fundamentals',
                'Programming Languages',
                'Database Management Systems',
                'Software Engineering',
                'Research Methodology'
            ],
            rating: 4.8,
            students: 280
        }
    ];

    const toggleExpand = (teacherId) => {
        setExpandedTeacher(expandedTeacher === teacherId ? null : teacherId);
    };

    return (
        <div className="teachers-page">
            <Header title="Teachers Information" subtitle="Faculty Profiles & Expertise" />

            <div className="teachers-container">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="teacher-card">
                        {/* Header Section */}
                        <div className="teacher-header">
                            <div className="teacher-basic-info">
                                <div className="teacher-avatar-section">
                                    <img src={teacher.avatar} alt={teacher.name} className="teacher-avatar" />
                                    <div className="teacher-stats">
                                        <div className="stat-item">
                                            <Star size={16} className="stat-icon" />
                                            <span>{teacher.rating}</span>
                                        </div>
                                        <div className="stat-item">
                                            <Users size={16} className="stat-icon" />
                                            <span>{teacher.students}+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="teacher-title-section">
                                    <h2 className="teacher-name">{teacher.name}</h2>
                                    <p className="teacher-designation">{teacher.designation}</p>
                                    <p className="teacher-department">{teacher.department}</p>
                                    <p className="teacher-specialization">{teacher.specialization}</p>

                                    <div className="teacher-contact-quick">
                                        <div className="contact-item">
                                            <Mail size={14} />
                                            <span>{teacher.email}</span>
                                        </div>
                                        <div className="contact-item">
                                            <Phone size={14} />
                                            <span>{teacher.phone}</span>
                                        </div>
                                        <div className="contact-item">
                                            <MapPin size={14} />
                                            <span>{teacher.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="expand-btn"
                                onClick={() => toggleExpand(teacher.id)}
                            >
                                {expandedTeacher === teacher.id ? (
                                    <>
                                        <ChevronUp size={20} />
                                        <span>Show Less</span>
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown size={20} />
                                        <span>View Details</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Courses Preview */}
                        <div className="courses-preview">
                            <h4>Courses Teaching:</h4>
                            <div className="courses-tags">
                                {teacher.courses.map((course, idx) => (
                                    <span key={idx} className="course-tag">{course}</span>
                                ))}
                            </div>
                        </div>

                        {/* Expanded Details */}
                        {expandedTeacher === teacher.id && (
                            <div className="teacher-details">
                                {/* Summary */}
                                {teacher.summary && (
                                    <div className="detail-section">
                                        <div className="section-header">
                                            <FileText size={20} />
                                            <h3>Summary</h3>
                                        </div>
                                        <p className="teacher-summary">{teacher.summary}</p>
                                        {teacher.youtubeChannel && (
                                            <div className="youtube-badge">
                                                <BookOpen size={16} />
                                                <span>{teacher.youtubeChannel}</span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Education */}
                                <div className="detail-section">
                                    <div className="section-header">
                                        <GraduationCap size={20} />
                                        <h3>Educational Qualifications</h3>
                                    </div>
                                    <div className="education-list">
                                        {teacher.education.map((edu, idx) => (
                                            <div key={idx} className="education-item">
                                                <div className="edu-degree">{edu.degree}</div>
                                                <div className="edu-institution">{edu.institution}</div>
                                                <div className="edu-details">
                                                    <span className="edu-year">{edu.year}</span>
                                                    {edu.specialization && (
                                                        <span className="edu-spec">• {edu.specialization}</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className="detail-section">
                                    <div className="section-header">
                                        <Briefcase size={20} />
                                        <h3>Professional Experience</h3>
                                    </div>
                                    <div className="experience-list">
                                        {teacher.experience.map((exp, idx) => (
                                            <div key={idx} className="experience-item">
                                                <div className="exp-role">{exp.role}</div>
                                                <div className="exp-org">{exp.organization}</div>
                                                <div className="exp-duration">{exp.duration}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="detail-section">
                                    <div className="section-header">
                                        <Trophy size={20} />
                                        <h3>Achievements & Recognition</h3>
                                    </div>
                                    <ul className="achievements-list">
                                        {teacher.achievements.map((achievement, idx) => (
                                            <li key={idx}>
                                                <Award size={14} className="achievement-icon" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Certifications */}
                                {teacher.certifications && teacher.certifications.length > 0 && (
                                    <div className="detail-section">
                                        <div className="section-header">
                                            <Award size={20} />
                                            <h3>Certifications</h3>
                                        </div>
                                        <ul className="certifications-list">
                                            {teacher.certifications.map((cert, idx) => (
                                                <li key={idx}>
                                                    <Award size={14} className="cert-icon" />
                                                    <span>{cert}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Publications */}
                                <div className="detail-section">
                                    <div className="section-header">
                                        <BookOpen size={20} />
                                        <h3>Recent Publications</h3>
                                    </div>
                                    <div className="publications-list">
                                        {teacher.publications.map((pub, idx) => (
                                            <div key={idx} className="publication-item">
                                                <FileText size={16} className="pub-icon" />
                                                <div className="pub-content">
                                                    <div className="pub-title">{pub.title}</div>
                                                    <div className="pub-details">
                                                        <span className="pub-journal">{pub.journal}</span>
                                                        <span className="pub-year">• {pub.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachersInfo;
