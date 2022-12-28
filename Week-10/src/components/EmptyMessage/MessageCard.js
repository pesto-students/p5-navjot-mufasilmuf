import React from 'react';
import { Link } from 'react-router-dom';

import MessageCardStyle from './MessageCard.module.scss';

const MessageCard = ({ message }) => {
    return (
        <section className={MessageCardStyle.messageCard}>
            <figcaption>
                <img src='https://tinyas.com/img/i/tinyas%20link%20management%20platform.png' alt='logo' />
            </figcaption>
            <p>{message}</p>
            <Link to='/'><button>Shorten it Now</button></Link>
        </section>
    )
}

export default React.memo(MessageCard);