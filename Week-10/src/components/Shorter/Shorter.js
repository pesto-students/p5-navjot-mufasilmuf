import axios from 'axios';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import ShorterStyle from './Shorter.module.scss';

const Shorter = () => {
    const { shortenUrl, setShortenUrl } = useContext(GlobalContext);
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        if (!url) setMessage('Please enter the url.');
        if (url) {
            setMessage('')
            setLoader(true);
            await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
                .then((res) => {
                    setLoader(false);
                    let updatedOne = [...shortenUrl];
                    updatedOne.push({ id: shortenUrl.length + 1, url, shortendUrl: res.data.result.full_short_link })
                    setShortenUrl(updatedOne);
                    setUrl('');
                })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={ShorterStyle.shorter_form}>
                <input type={'url'} value={url} name='url' placeholder='shorten a link here...' onChange={e => setUrl(e.target.value)} />
                <button type='submit' disabled={loader}>{!loader ? 'Shorten it!' : 'Loading..'}</button>
            </form>
            <p className={ShorterStyle.status}>{message}</p>
        </>
    )
}

export default Shorter;