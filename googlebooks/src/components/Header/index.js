import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import './style.css';

function Header (props) {
    const location = useLocation();
    // if (location.pathname = '/search') {
        return(
            <div>
                <Card>
                    <Typography variant='h6'>
                        <h3 align='center'>{props.title}</h3>
                    </Typography>
                </Card>
            </div>
        )
    // } if (location.pathname = '/saved') {
    //     return(
    //         <Card>
    //             <Typography variant='h6'>
    //                 <h3>Saved Google Books</h3>
    //             </Typography>
    //         </Card>
    //     )
    // }
}

export default Header;