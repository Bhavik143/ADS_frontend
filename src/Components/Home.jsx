import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container my-5 text-center">
            <h1>🍀Welcome to the Login Portal!🍀</h1>
            <div className="my-4">
                <Link to="/login" className="btn btn-primary mx-2" role="button" onClick={() => localStorage.setItem('role', 'student')}>
                    Student Login 🧑‍💻
                </Link>
                <Link to="/login" className="btn btn-success mx-2" role="button" onClick={() => localStorage.setItem('role', 'admin')}>
                    Admin Login 🧑‍🏫
                </Link>
            </div>
        </div>
    );
};

export default Home;
