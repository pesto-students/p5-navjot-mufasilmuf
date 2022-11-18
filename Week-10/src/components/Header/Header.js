import React from 'react';
import { Link } from 'react-router-dom';

import HeaderStyle from "./Header.module.scss";

const Header = () => {
    return (
        <header className={HeaderStyle.header}>
            <Link to='/'>
                <h2>Shortly</h2>
            </Link>
            <ul>
                <Link to='/list'>
                    <li>List</li>
                </Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <section className={HeaderStyle.btn_group}>
                <span>Login</span>
                <span>Sign Up</span>
            </section>
        </header>
    )
}

export default Header