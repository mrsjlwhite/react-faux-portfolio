import React from 'react';
import Loading from '../Loading';

function ProjectCard({ projectNames }) {
    function goToRepo() {
        window.location.href = 'https://github.com/mrsjlwhite/';
    }
    
    return (
        <div>
            {!projectNames && <Loading />}

            {projectNames && (
                <div>
                    {projectNames.map((project) => (
                        <div style={{ paddingBottom: '30px' }}>
                            <button type='button' onClick={goToRepo}>Project Repo</button>
                            <h3>{project}</h3>
                            <img
                                src={'https://c.tenor.com/8NDNgpycELcAAAAC/website-web-surfing.gif'}
                                alt={project}
                                className="project-thumbnail mx-1"
                                key={project}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProjectCard;