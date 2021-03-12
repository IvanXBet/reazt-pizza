import React from 'react';
import Header from '../header/header.js';
import BlockCards from '../block-cards/block-cards';
import Filter from '../filter/filter';

const MainPage = () => {
    return (
        <>
            <Header cartButton = {true}/>
            <Filter/>
            <BlockCards/>
        </>
    )
}

export default MainPage;
