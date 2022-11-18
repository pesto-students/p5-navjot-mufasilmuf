import React, { Fragment, useContext } from 'react';
import { isEmpty } from 'lodash';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ListCard from '../../components/ListCard/ListCard';
import { GlobalContext } from '../../context/GlobalContext';
import MessageCard from '../../components/EmptyMessage/MessageCard';

const List = () => {
    const { shortenUrl } = useContext(GlobalContext);

    return (
        <Fragment>
            <Header />
            <section>
                {isEmpty(shortenUrl) ? <MessageCard message='Your List is Epmty' /> :
                    shortenUrl.map((item) => (
                        <ListCard key={item.id} data={item} />
                    ))
                }
            </section>
            <Footer />
        </Fragment>
    )
}

export default List;