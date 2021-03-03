import React from 'react';

import './button.scss';

const Button = ({className, onClick, children}) => {
    return (
        <div className={className} onClick={onClick}>
              {children}          
                      
        </div>
    )
}

export default Button;