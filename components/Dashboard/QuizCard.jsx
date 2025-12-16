import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Clock, Award, ChevronRight } from 'lucide-react';
import './QuizCard.css';

const QuizCard = () => {
    const navigate = useNavigate();

    const availableQuizzes = [
        {
            id: 1,
            title: 'Data Structures & Algorithms',
            subject: 'Computer Science',
            duration: 30,
            questions: 10,
            difficulty: 'Medium'
        },
        {
            id: 2,
            title: 'Database Management',
            subject: 'Computer Science',
            duration: 25,
            questions: 15,
            difficulty: 'Easy'
        },
        {
            id: 3,
            title: 'Operating Systems',
            subject: 'Computer Science',
            duration: 40,
            questions: 20,
            difficulty: 'Hard'
        }
    ];

    const handleStartQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="quiz-card">
            <div className="quiz-card-header">
                <div className="quiz-icon-wrapper">
                    <Brain size={24} />
                </div>
                <div>
                    <h3>Practice Quizzes</h3>
                    <p>Test your knowledge</p>
                </div>
            </div>

            <div className="quiz-list">
                {availableQuizzes.slice(0, 2).map((quiz) => (
                    <div key={quiz.id} className="quiz-item" onClick={handleStartQuiz}>
                        <div className="quiz-item-content">
                            <h4>{quiz.title}</h4>
                            <div className="quiz-meta">
                                <span className="quiz-meta-item">
                                    <Clock size={14} />
                                    {quiz.duration} min
                                </span>
                                <span className="quiz-meta-item">
                                    <Award size={14} />
                                    {quiz.questions} questions
                                </span>
                                <span className={`difficulty-badge ${quiz.difficulty.toLowerCase()}`}>
                                    {quiz.difficulty}
                                </span>
                            </div>
                        </div>
                        <ChevronRight size={20} className="quiz-arrow" />
                    </div>
                ))}
            </div>

            <button className="view-all-quizzes" onClick={handleStartQuiz}>
                View All Quizzes
            </button>
        </div>
    );
};

export default QuizCard;
