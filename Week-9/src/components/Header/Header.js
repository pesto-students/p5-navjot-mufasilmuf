import React from 'react';

import HeaderStyle from './Header.module.scss';

const Header = () => {
    return (
        <header className={HeaderStyle.header}>
            <h2>Pesto To List</h2>
        </header>
    )
}

export default Header;