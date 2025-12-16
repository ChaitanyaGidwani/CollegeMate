import React, { useState } from 'react';
import Header from '../components/Dashboard/Header';
import { Shield, Key, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import './Settings.css';

const Settings = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSendVerification = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setEmailSent(true);
        }, 1500);
    };

    return (
        <div className="settings-page">
            <Header title="Settings" subtitle="Manage your account preferences" />

            <div className="settings-container">
                <div className="settings-section">
                    <div className="section-header">
                        <Shield className="section-icon" size={24} />
                        <h2>Security & Login</h2>
                    </div>

                    <div className="setting-card">
                        <div className="setting-info">
                            <div className="setting-title-row">
                                <Key size={20} className="text-secondary" />
                                <h3>Change Password</h3>
                            </div>
                            <p className="setting-desc">
                                For security reasons, you cannot change your password directly here.
                                We will send a secure verification link to your registered email address
                                <strong> (chaitanya.gidwani@example.com)</strong> to proceed with the password reset.
                            </p>
                        </div>

                        <div className="setting-action">
                            {!emailSent ? (
                                <button
                                    className={`verify-btn ${loading ? 'loading' : ''}`}
                                    onClick={handleSendVerification}
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : (
                                        <>
                                            Send Verification Mail <Mail size={18} />
                                        </>
                                    )}
                                </button>
                            ) : (
                                <div className="success-message">
                                    <CheckCircle size={20} />
                                    <span>Verification link sent! Check your inbox.</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Placeholder for other settings */}
                <div className="settings-section">
                    <div className="setting-card disabled">
                        <div className="setting-info">
                            <h3>Notifications (Coming Soon)</h3>
                            <p>Manage your email and push notification preferences.</p>
                        </div>
                        <ArrowRight size={20} className="arrow-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
