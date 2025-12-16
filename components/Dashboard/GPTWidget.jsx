import React from 'react';
import { MoreVertical, Send } from 'lucide-react';
import './GPTWidget.css';

const GPTWidget = () => {
    return (
        <div className="gpt-widget">
            <div className="gpt-header">
                <h3>ask to gpt</h3>
                <button className="icon-btn-small">
                    <MoreVertical size={16} />
                </button>
            </div>

            <div className="gpt-body">
                <div className="gpt-message">
                    <img src="https://i.pravatar.cc/150?img=5" alt="Bot" className="gpt-avatar" />
                    <div className="gpt-text">
                        <p>to calculate you attendance</p>
                        <span className="gpt-version">GPT&gt;5.1</span>
                    </div>
                </div>
            </div>

            <div className="gpt-input-area">
                <input type="text" placeholder="Reply" className="gpt-input" />
                <button className="gpt-send-btn">
                    Send
                </button>
            </div>
        </div>
    );
};

export default GPTWidget;
