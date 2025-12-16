import React, { useState } from 'react';
import Header from '../components/Dashboard/Header';
import { ChevronDown, ChevronUp, Mail, MessageCircle } from 'lucide-react';
import './HelpSupport.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
};

const HelpSupport = () => {
    const faqs = [
        {
            question: "How is my attendance calculated?",
            answer: "Attendance is calculated based on the number of classes you were present for calculated against the total number of classes conducted. Exempted classes are not counted in the total."
        },
        {
            question: "Can I update my profile details?",
            answer: "Some profile details like your phone number can be updated from the settings. For critical changes like Name or Branch, please contact the administration."
        },
        {
            question: "Who do I contact for discrepancies in marks?",
            answer: "Please reach out to your respective subject teacher or the Head of Department with your concern."
        },
        {
            question: "How do I join a club?",
            answer: "You can apply for club membership during the recruitment drive at the start of the semester. Check the 'Club Details' page for more info on active clubs."
        }
    ];

    return (
        <div className="help-page">
            <Header title="Help & Support" subtitle="Get answers and support" />

            <div className="help-grid">
                <div className="faq-section">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>

                <div className="contact-section">
                    <h2 className="section-title">Contact Support</h2>
                    <div className="contact-card">
                        <p className="contact-desc">
                            Can't find what you're looking for? Send us a message and we'll get back to you.
                        </p>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="What is this regarding?" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="Describe your issue..."></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <Mail size={18} />
                                Send Message
                            </button>
                        </form>

                        <div className="contact-direct">
                            <div className="direct-item">
                                <MessageCircle size={20} />
                                <span>support@collegemate.edu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;
