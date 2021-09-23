import React from 'react';
import ProjectCard from '../ProjectCard';

function Portfolio() {
    const projectNames = ['Project One', 'Project Two', 'Project Three', 'Project Four', 'Project Five', 'Project Six'];
    
    return (
        <div className="content-container">
            <div className="content">
                <h1>Faux Portfolio</h1>
                <ProjectCard projectNames={projectNames} />
            </div>
        </div>
    );
};

export default Portfolio;