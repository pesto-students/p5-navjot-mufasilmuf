import React from 'react';

import FooterStyle from "./Footer.module.scss";

const FooterData = [
    {
        id: 1,
        category: 'Features',
        items: ['Link Shortning', 'Branded Links', 'Analytics']
    },
    {
        id: 2,
        category: 'Resources',
        items: ['Blog', 'Developers', 'Support']
    },
    {
        id: 3,
        category: 'Company',
        items: ['About', 'Our team', 'Careers', 'Contact']
    }
]

const Footer = () => {
    return (
        <footer className={FooterStyle.footer}>
            {FooterData.map((category) => (
                <ul key={category.id}>
                    <li className={FooterStyle.category_heading}>{category.category}</li>
                    {category.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            ))}
        </footer>
    )
}

export default React.memo(Footer);