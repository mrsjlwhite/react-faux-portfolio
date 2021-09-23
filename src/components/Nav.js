import React from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
    
    return (
        <header className="pink-bg">
            <h2 className="header-title">
                <img src='https://emojis.slackmojis.com/emojis/images/1614674848/16192/cloud.gif?1614674848' alt='cloud'/>
                My Faux Portfolio
            </h2>
            <nav className="header-nav">
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li
                        className={`mx-1 ${
                            currentCategory.name === category.name && `navActive`
                            }`}
                          key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                }}>
                                {(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;