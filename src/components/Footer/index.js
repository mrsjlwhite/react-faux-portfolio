import React from 'react';

function Footer() {
    return (
        <nav className="footer-styles">
            <ul className="flex-row footer-list">
                <li>
                    <a href="https://github.com/mrsjlwhite/">
                        <img alt="github"
                            src="https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jeslyn-white/">
                        <img alt="linkedin"
                            src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/16305154/jessie">
                        <img alt="stackoverflow"
                            src="https://img.shields.io/badge/-StackOverflow-F58025?style=for-the-badge&logo=stackoverflow&logoColor=white" />
                    </a>
                </li>
            </ul>
        </nav>

    );
};

export default Footer;