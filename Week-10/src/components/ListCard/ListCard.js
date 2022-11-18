import React, { useRef, useState } from 'react';

import ListCardStyle from './ListCard.module.scss';

const ListCard = ({ data: { shortendUrl, url } }) => {
    const [copyStatus, setcopyStatus] = useState(false);
    const textCopyRef = useRef(null);

    const copyClick = () => {
        let text = textCopyRef.current.innerHTML;
        navigator.clipboard.writeText(text);
        setcopyStatus(true);
        reset();
    }

    const reset = () => {
        setTimeout(() => {
            setcopyStatus(false)
        }, 5000)
    }

    return (
        <div className={ListCardStyle.listcard_container}>
            <section className={ListCardStyle.listcard}>
                <p>{url}</p>
                <div className={ListCardStyle.copy_container}>
                    <span ref={textCopyRef}>{shortendUrl}</span>
                    <button disabled={copyStatus} onClick={copyClick}>{copyStatus ? 'Copied!' : 'Copy'}</button>
                </div>
            </section>
        </div>
    )
}

export default ListCard;