import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [prn, setPrn] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [activities, setActivities] = useState('');
    const [achievements, setAchievements] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/form/${id}`);
                console.log(response.data);
                setName(response.data.name);
                setPrn(response.data.prn);
                setYear(response.data.year);
                setBranch(response.data.branch);
                setActivities(response.data.activities);
                setAchievements(response.data.achievements);
                setEmail(response.data.email);
                setPhone(response.data.phone);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/form/${id}`, {
                name,
                prn,
                year,
                branch,
                activities,
                achievements,
                email,
                phone,
            });

            console.log(response.data);
            // Add any logic for handling successful update, such as redirecting or showing a message.
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="mb-3">Update Form</h1>
            <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="prn" className="form-label">PRN</label>
                        <input
                            type="text"
                            className="form-control"
                            id="prn"
                            name="prn"
                            required
                            value={prn}
                            onChange={(e) => setPrn(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="year" className="form-label">Year</label>
                        <input
                            type="text"
                            className="form-control"
                            id="year"
                            name="year"
                            required
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="branch" className="form-label">Branch</label>
                        <input
                            type="text"
                            className="form-control"
                            id="branch"
                            name="branch"
                            required
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="activities" className="form-label">Activities</label>
                        <input
                            type="text"
                            className="form-control"
                            id="activities"
                            name="activities"
                            value={activities}
                            onChange={(e) => setActivities(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="achievements" className="form-label">Achievements</label>
                        <input
                            type="text"
                            className="form-control"
                            id="achievements"
                            name="achievements"
                            value={achievements}
                            onChange={(e) => setAchievements(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-6">
                                {/* Use Link to navigate back to View.jsx */}
                                <Link to="/view" className="btn btn-warning w-100 fw-bold" onClick={handleUpdate}>
                                    Update
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;
