import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeStyles.css';

function Home() {
     const navigate = useNavigate();

     const handleStudentClick = () => {
          navigate('/student');
     };

     const handleTeacherClick = () => {
          navigate('/teacher');
     };

     return (
         <div className="account-selection">
              <header className="header">
                   <div className="logo">kahoot!</div>
              </header>
              <main className="main">
                   <h1>Choose your account type</h1>
                   <div className="cards">
                        <div className="card" onClick={handleTeacherClick}>
                             <div className="card-icon" style={{ backgroundColor: "#cf1c47" }}>
                                  📖
                             </div>
                             <div className="card-title">Teacher</div>
                        </div>
                        <div className="card" onClick={handleStudentClick}>
                             <div className="card-icon" style={{ backgroundColor: "#f4b400" }}>
                                  👤
                             </div>
                             <div className="card-title">Student</div>
                        </div>
                   </div>
              </main>
         </div>
     );
}

export default Home;