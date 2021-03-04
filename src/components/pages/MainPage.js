import React from 'react';
import Header from '../header/header.js';
import BlockCards from '../block-cards/block-cards';

const MainPage = () => {
    return (
        <>
            <Header cartButton = {true}/>
            <BlockCards/>
        </>
    )
}

export default MainPage;
