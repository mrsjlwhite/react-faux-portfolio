import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

function About() {
    const [profilePic, setProfilePic] = useState('');

    useEffect(() => {
        fetch('https://gitconnected.com/v1/portfolio/mrsjlwhite', { method: 'GET' })
            .then(res => res.json())
            .then(res => setProfilePic(res.basics.picture));
    }, []);

    return (
        <div className="content-container">
            {profilePic === '' && (
                <Loading />
            )}

            {profilePic !== '' && (
                <div className="content">
                    <h1>About Me?</h1>
                    <p>
                        I’m a self-taught software developer with a passion for developing user-friendly applications. Since beginning my career in 2017, my interest and admiration for programming has only grown. During this time, I’ve developed an ethic of building clean, reusable, and high-quality code as I strive to keep with current best practices. I am interested in solo work and collaborative projects.
                    </p>
                    <img
                        src={profilePic}
                        alt='profile'
                        className="img-thumbnail mx-1"
                        key='profile'
                    />
                </div>
            )}
        </div>
    )
}

export default About;