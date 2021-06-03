import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';

function Results (props) {
    <div>
        <Grid container>
            <Card>
                <Typography>
                    <h1 {props.results} />
                </Typography>
            </Card>
        </Grid>
    </div>
}

export default Results;