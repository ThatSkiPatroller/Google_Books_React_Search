import React from 'react';
import { Typography } from '@material-ui/core';
import './style.css';

function Header (props) {
    return(
        <div>
            <Typography variant='h6'>
                <h3 align='center'>{props.title}</h3>
            </Typography>
        </div>
    )
}

export default Header;