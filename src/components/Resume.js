import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Resume() {
    const [resume, setResume] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://gitconnected.com/v1/portfolio/mrsjlwhite', { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                setResume(res);
                setIsLoading(false);
            });
    }, [])

    return (
        <div className="content-container">
            <div>
                {isLoading && (
                    <Loading />
                )}

                {!isLoading &&
                    <div className='content'>
                        <h1>My Resume</h1>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                            <div>
                                <h2>Skills</h2>
                                <ul>
                                    {resume.skills.map((skill) => (
                                        <li
                                            className={`mx-1`}
                                            key={skill.name}>
                                            <span>
                                                {(skill.name)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2>My Roles</h2>
                                {resume.work.map((job) => (
                                    <span>
                                        <p>{job.position}</p>
                                        <p className='subtext'>{job.company} at {job.location}</p>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Resume;