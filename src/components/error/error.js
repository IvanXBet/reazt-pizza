import React from 'react';
import Header from '../header/header';

import './error.scss';
const Error = () => {
    return (
        <>
            
            <div className='error'>
                <div className='error__title'>Кажется возникла какая-то ошибка 😕</div>
                <div className='error__descr'>Наш сервис временно недоступен.<br/> Скоро вернёмся.</div>
                <div className='error__img'>
                
                </div>
            </div>
        </>
    )
}

export default Error;