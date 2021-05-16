import React, {useState} from 'react';
import {useAuth} from '../../hooks/auth.hook';
import {Link} from 'react-router-dom';


const Profil = () => {

    const {logout} = useAuth();

    return (
        <>
            <div>
                <div>ПРОФИЛЬ</div>
                <Link to={'/'} onClick={logout} className='button'>Выход</Link>
            </div>
            
        </>
    )

}
export default Profil;
