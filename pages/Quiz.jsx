import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Dashboard/Header';
import {
    Clock,
    CheckCircle,
    XCircle,
    Award,
    ChevronLeft,
    ChevronRight,
    Flag,
    AlertCircle
} from 'lucide-react';
import './Quiz.css';

const Quiz = () => {
    const navigate = useNavigate();

    // Sample quiz data - can be fetched from API
    const quizData = {
        title: 'Data Structures & Algorithms',
        subject: 'Computer Science',
        duration: 30, // minutes
        totalMarks: 100,
        questions: [
            {
                id: 1,
                question: 'What is the time complexity of binary search?',
                options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
                correctAnswer: 1,
                marks: 10
            },
            {
                id: 2,
                question: 'Which data structure uses LIFO (Last In First Out) principle?',
                options: ['Queue', 'Stack', 'Array', 'Linked List'],
                correctAnswer: 1,
                marks: 10
            },
            {
                id: 3,
                question: 'What is the worst-case time complexity of Quick Sort?',
                options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'],
                correctAnswer: 2,
                marks: 10
            },
            {
                id: 4,
                question: 'In a binary tree, what is the maximum number of nodes at level L?',
                options: ['2^L', '2^(L-1)', 'L²', '2L'],
                correctAnswer: 0,
                marks: 10
            },
            {
                id: 5,
                question: 'Which traversal of a binary tree visits nodes in ascending order for a BST?',
                options: ['Preorder', 'Postorder', 'Inorder', 'Level order'],
                correctAnswer: 2,
                marks: 10
            },
            {
                id: 6,
                question: 'What is the space complexity of merge sort?',
                options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
                correctAnswer: 2,
                marks: 10
            },
            {
                id: 7,
                question: 'Which data structure is used for implementing recursion?',
                options: ['Queue', 'Stack', 'Array', 'Tree'],
                correctAnswer: 1,
                marks: 10
            },
            {
                id: 8,
                question: 'What is the average case time complexity of hash table operations?',
                options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
                correctAnswer: 0,
                marks: 10
            },
            {
                id: 9,
                question: 'In a graph, what is a cycle?',
                options: [
                    'A path that starts and ends at the same vertex',
                    'A path with no repeated edges',
                    'A path with maximum length',
                    'A path with minimum weight'
                ],
                correctAnswer: 0,
                marks: 10
            },
            {
                id: 10,
                question: 'Which algorithm is used to find the shortest path in a weighted graph?',
                options: ['BFS', 'DFS', 'Dijkstra\'s Algorithm', 'Binary Search'],
                correctAnswer: 2,
                marks: 10
            }
        ]
    };

    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(quizData.duration * 60); // in seconds
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());

    // Timer effect
    useEffect(() => {
        if (quizStarted && !quizCompleted && timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        handleSubmitQuiz();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [quizStarted, quizCompleted, timeRemaining]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleAnswerSelect = (questionId, answerIndex) => {
        setAnswers({
            ...answers,
            [questionId]: answerIndex
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestion < quizData.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleQuestionJump = (index) => {
        setCurrentQuestion(index);
    };

    const toggleFlag = (questionId) => {
        const newFlagged = new Set(flaggedQuestions);
        if (newFlagged.has(questionId)) {
            newFlagged.delete(questionId);
        } else {
            newFlagged.add(questionId);
        }
        setFlaggedQuestions(newFlagged);
    };

    const handleSubmitQuiz = () => {
        setQuizCompleted(true);
    };

    const calculateResults = () => {
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;
        let totalMarks = 0;

        quizData.questions.forEach(question => {
            const userAnswer = answers[question.id];
            if (userAnswer === undefined) {
                unanswered++;
            } else if (userAnswer === question.correctAnswer) {
                correct++;
                totalMarks += question.marks;
            } else {
                incorrect++;
            }
        });

        return {
            correct,
            incorrect,
            unanswered,
            totalMarks,
            percentage: ((totalMarks / quizData.totalMarks) * 100).toFixed(2)
        };
    };

    // Start Screen
    if (!quizStarted) {
        return (
            <div className="quiz-page">
                <Header title="Quiz" subtitle="Test Your Knowledge" />

                <div className="quiz-start-container">
                    <div className="quiz-info-card">
                        <div className="quiz-header-section">
                            <h2 className="quiz-title">{quizData.title}</h2>
                            <span className="quiz-subject-badge">{quizData.subject}</span>
                        </div>

                        <div className="quiz-details">
                            <div className="quiz-detail-item">
                                <Clock size={20} />
                                <div>
                                    <span className="detail-label">Duration</span>
                                    <span className="detail-value">{quizData.duration} minutes</span>
                                </div>
                            </div>
                            <div className="quiz-detail-item">
                                <Award size={20} />
                                <div>
                                    <span className="detail-label">Total Marks</span>
                                    <span className="detail-value">{quizData.totalMarks}</span>
                                </div>
                            </div>
                            <div className="quiz-detail-item">
                                <AlertCircle size={20} />
                                <div>
                                    <span className="detail-label">Questions</span>
                                    <span className="detail-value">{quizData.questions.length}</span>
                                </div>
                            </div>
                        </div>

                        <div className="quiz-instructions">
                            <h3>Instructions:</h3>
                            <ul>
                                <li>Read each question carefully before answering</li>
                                <li>You can navigate between questions using the navigation panel</li>
                                <li>Flag questions for review if needed</li>
                                <li>The quiz will auto-submit when time runs out</li>
                                <li>Make sure to submit your quiz before the timer ends</li>
                            </ul>
                        </div>

                        <button className="start-quiz-btn" onClick={handleStartQuiz}>
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Results Screen
    if (quizCompleted) {
        const results = calculateResults();

        return (
            <div className="quiz-page">
                <Header title="Quiz Results" subtitle="Your Performance Summary" />

                <div className="results-container">
                    <div className="results-card">
                        <div className="results-header">
                            <Award size={48} className="results-icon" />
                            <h2>Quiz Completed!</h2>
                            <p className="quiz-title-small">{quizData.title}</p>
                        </div>

                        <div className="score-display">
                            <div className="score-circle">
                                <span className="score-percentage">{results.percentage}%</span>
                                <span className="score-label">Score</span>
                            </div>
                            <div className="marks-display">
                                <span className="marks-obtained">{results.totalMarks}</span>
                                <span className="marks-separator">/</span>
                                <span className="marks-total">{quizData.totalMarks}</span>
                            </div>
                        </div>

                        <div className="results-breakdown">
                            <div className="result-stat correct">
                                <CheckCircle size={24} />
                                <div>
                                    <span className="stat-value">{results.correct}</span>
                                    <span className="stat-label">Correct</span>
                                </div>
                            </div>
                            <div className="result-stat incorrect">
                                <XCircle size={24} />
                                <div>
                                    <span className="stat-value">{results.incorrect}</span>
                                    <span className="stat-label">Incorrect</span>
                                </div>
                            </div>
                            <div className="result-stat unanswered">
                                <AlertCircle size={24} />
                                <div>
                                    <span className="stat-value">{results.unanswered}</span>
                                    <span className="stat-label">Unanswered</span>
                                </div>
                            </div>
                        </div>

                        <div className="results-actions">
                            <button className="btn-secondary" onClick={() => navigate('/dashboard')}>
                                Back to Dashboard
                            </button>
                            <button className="btn-primary" onClick={() => window.location.reload()}>
                                Retake Quiz
                            </button>
                        </div>
                    </div>

                    {/* Answer Review */}
                    <div className="answer-review-card">
                        <h3>Answer Review</h3>
                        <div className="review-list">
                            {quizData.questions.map((question, index) => {
                                const userAnswer = answers[question.id];
                                const isCorrect = userAnswer === question.correctAnswer;
                                const isAnswered = userAnswer !== undefined;

                                return (
                                    <div key={question.id} className={`review-item ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered'}`}>
                                        <div className="review-header">
                                            <span className="question-number">Q{index + 1}</span>
                                            {isAnswered ? (
                                                isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />
                                            ) : (
                                                <AlertCircle size={20} />
                                            )}
                                        </div>
                                        <p className="review-question">{question.question}</p>
                                        <div className="review-answers">
                                            {isAnswered && (
                                                <p className="user-answer">
                                                    Your answer: <span>{question.options[userAnswer]}</span>
                                                </p>
                                            )}
                                            {!isCorrect && (
                                                <p className="correct-answer">
                                                    Correct answer: <span>{question.options[question.correctAnswer]}</span>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Quiz Taking Screen
    const question = quizData.questions[currentQuestion];
    const answeredCount = Object.keys(answers).length;
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

    return (
        <div className="quiz-page">
            <div className="quiz-header-bar">
                <div className="quiz-header-left">
                    <h2>{quizData.title}</h2>
                    <span className="question-counter">
                        Question {currentQuestion + 1} of {quizData.questions.length}
                    </span>
                </div>
                <div className="quiz-header-right">
                    <div className={`timer ${timeRemaining < 300 ? 'warning' : ''}`}>
                        <Clock size={20} />
                        <span>{formatTime(timeRemaining)}</span>
                    </div>
                </div>
            </div>

            <div className="quiz-content">
                {/* Question Panel */}
                <div className="question-panel">
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>

                    <div className="question-container">
                        <div className="question-header">
                            <h3>Question {currentQuestion + 1}</h3>
                            <button
                                className={`flag-btn ${flaggedQuestions.has(question.id) ? 'flagged' : ''}`}
                                onClick={() => toggleFlag(question.id)}
                            >
                                <Flag size={20} />
                                {flaggedQuestions.has(question.id) ? 'Flagged' : 'Flag for Review'}
                            </button>
                        </div>

                        <p className="question-text">{question.question}</p>

                        <div className="options-container">
                            {question.options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`option-btn ${answers[question.id] === index ? 'selected' : ''}`}
                                    onClick={() => handleAnswerSelect(question.id, index)}
                                >
                                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                    <span className="option-text">{option}</span>
                                </button>
                            ))}
                        </div>

                        <div className="question-navigation">
                            <button
                                className="nav-btn"
                                onClick={handlePreviousQuestion}
                                disabled={currentQuestion === 0}
                            >
                                <ChevronLeft size={20} />
                                Previous
                            </button>
                            <button
                                className="nav-btn primary"
                                onClick={handleNextQuestion}
                                disabled={currentQuestion === quizData.questions.length - 1}
                            >
                                Next
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Sidebar */}
                <div className="navigation-sidebar">
                    <div className="sidebar-header">
                        <h4>Question Navigator</h4>
                        <span className="answered-count">{answeredCount}/{quizData.questions.length} Answered</span>
                    </div>

                    <div className="question-grid">
                        {quizData.questions.map((q, index) => (
                            <button
                                key={q.id}
                                className={`question-number-btn 
                                    ${currentQuestion === index ? 'active' : ''} 
                                    ${answers[q.id] !== undefined ? 'answered' : ''}
                                    ${flaggedQuestions.has(q.id) ? 'flagged' : ''}
                                `}
                                onClick={() => handleQuestionJump(index)}
                            >
                                {index + 1}
                                {flaggedQuestions.has(q.id) && <Flag size={12} className="flag-icon" />}
                            </button>
                        ))}
                    </div>

                    <div className="legend">
                        <div className="legend-item">
                            <span className="legend-box answered"></span>
                            <span>Answered</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-box unanswered"></span>
                            <span>Not Answered</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-box flagged"></span>
                            <span>Flagged</span>
                        </div>
                    </div>

                    <button className="submit-quiz-btn" onClick={handleSubmitQuiz}>
                        Submit Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
