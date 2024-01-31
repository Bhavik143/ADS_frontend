import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="container my-5">
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Error</h4>
                <p>Oops! Something went wrong. Please try again later.</p>
                <hr />
                <p className="mb-0">
                    <Link to="/form" className="btn btn-primary">
                        Go to Form
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Error;
