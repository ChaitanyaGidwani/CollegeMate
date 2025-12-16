import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import ClubDetails from './pages/ClubDetails';
import Profile from './pages/Profile';
import HelpSupport from './pages/HelpSupport';
import Settings from './pages/Settings';
import TeachersInfo from './pages/TeachersInfo';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="clubs" element={<ClubDetails />} />
          <Route path="teachers" element={<TeachersInfo />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<HelpSupport />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<div className="text-white p-10">Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
