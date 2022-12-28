import React from 'react';

import BannerStyle from "./Banner.module.scss";

const Banner = () => {
    return (
        <section className={BannerStyle.banner}>
            <h1>More than just shorter Link</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        </section>
    )
}

export default React.memo(Banner);