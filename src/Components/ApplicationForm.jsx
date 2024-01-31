import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ApplicationForm = () => {
    const [name, setName] = useState('');
    const [prn, setPrn] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [activities, setActivities] = useState('');
    const [achievements, setAchievements] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setrole] = useState(localStorage.getItem('role'));

    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePrn = (e) => {
        setPrn(e.target.value);
    };

    const handleYear = (e) => {
        setYear(e.target.value);
    };

    const handleBranch = (e) => {
        setBranch(e.target.value);
    };

    const handleActivities = (e) => {
        setActivities(e.target.value);
    };

    const handleAchievements = (e) => {
        setAchievements(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:5000/form', {
                name,
                prn,
                year,
                branch,
                activities,
                achievements,
                email,
                phone,
            });

            setName('');
            setPrn('');
            setYear('');
            setBranch('');
            setActivities('');
            setAchievements('');
            setEmail('');
            setPhone('');

            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handlenewuser = async () => {
        navigate('/signup');
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">

                <div className="col-lg-9">

                    <h1 className="mb-3">Application Form</h1>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    required
                                    value={name}
                                    onChange={handleName}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="prn" className="form-label">Your PRN</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="prn"
                                    name="prn"
                                    required
                                    value={prn}
                                    onChange={handlePrn}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="year" className="form-label">Your Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="year"
                                    name="year"
                                    required
                                    value={year}
                                    onChange={handleYear}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="branch" className="form-label">Your Branch</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="branch"
                                    name="branch"
                                    required
                                    value={branch}
                                    onChange={handleBranch}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="activities" className="form-label">Your Activities</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="activities"
                                    name="activities"
                                    value={activities}
                                    onChange={handleActivities}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="achievements" className="form-label">Your Achievements</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="achievements"
                                    name="achievements"
                                    value={achievements}
                                    onChange={handleAchievements}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Your Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={handlePhone}
                                />
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button
                                            type="button"
                                            className="btn btn-dark w-100 fw-bold"
                                            onClick={handleSubmit}
                                        >
                                            Send
                                        </button>
                                    </div>
                                    {(role === 'admin') && <div className="col-md-6">
                                        <Link to="/view" className="btn btn-success w-100 fw-bold">
                                            Go to Table
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {(role === 'admin') && 
                <button type="button" className="btn btn-warning my-5" onClick={handlenewuser}>Add User</button>
            }
        </div>
    );
    
}

export default ApplicationForm;