import React from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
    
    return (
        <header className="pink-bg">
            <h2>
                <span
                    role="img"
                    aria-label="react">
                    ⚛
                </span>
                My Faux Portfolio
            </h2>
            <nav>
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