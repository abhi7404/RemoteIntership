import React from 'react';
import './Home.css'; // Add a CSS file for styling if needed

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Remote Internship Management and Evaluation System</h1>
      </header>
      <section className="home-get-started">
        <h2>Let's Get Started</h2>
        <div className="home-buttons">
          <button onClick={() => window.location.href = '/login'}>Login</button>
          <button onClick={() => window.location.href = '/adminlogin'}>Admin Login</button>
          <button onClick={() => window.location.href = '/signup'}>Register</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
