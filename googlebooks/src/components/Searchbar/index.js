import React from 'react';
import { Card, TextField, Button, Grid } from '@material-ui/core';
import { useFormik } from "formik";
import * as Yup from "yup";
import './style.css';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    search: Yup.string()
})

function Searchbar () {
    const formik = useFormik({
        initialValues: {
            search: 'Search'
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        const newSearch = {
            search: formik.values.search
        }
        axios.get('http://localhost:3001/books', newSearch)
    }
    })

    return(
        <Grid
            container
            justify='center'
        >
        <Card>
            <TextField
                variant="outlined"
                id="search"
                placeholder="Search Book Here"
                fullWidth
            />
            <Button color='primary' id='bttn' variant='contained' type='submit' fullWidth>Search</Button>
        </Card>
        </Grid>
    )
}

export default Searchbar