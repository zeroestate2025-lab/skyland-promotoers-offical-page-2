import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicyScreen from './pages/PrivacyPolicyScreen.jsx';
import About from './pages/About.jsx'; // ✅ Make sure this file exists

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            {/* <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PrivacyPolicyScreen />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
