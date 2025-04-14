import React from 'react';
import { Link } from 'react-router-dom';
import './notFoundPage.css';


const NotFoundPage = () => {
    return (
        <div className='notFound-container'>
            <h1 className='notFound-heading'>404 - Page Not Found</h1>
            <p className='notFound-paragraph'>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className='link-home'>
                <button>Go to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;