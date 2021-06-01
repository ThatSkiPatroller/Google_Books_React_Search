import React from 'react';
import './style.css';
import { AppBar, Toolbar, Button, IconButton, Typography, Grid } from '@material-ui/core';

function Navbar (props) {
    return(
        <div className="root">
        <AppBar position="static">
            <Toolbar>
                <Grid
                    justify="flex-start"
                    container
                >
                <IconButton edge="start" color="inherit" aria-label="menu" />
                <Typography variant="h6">
                    <h3>Google Books</h3>
                </Typography></Grid>
                <Button color="inherit" justify="flex-end">{props.NavBut}</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;