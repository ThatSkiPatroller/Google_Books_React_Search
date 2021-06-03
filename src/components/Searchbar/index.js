import React, {useState} from 'react';
import { Card, TextField, Button, Grid } from '@material-ui/core';
import { useFormik } from "formik";
import * as Yup from "yup";
import './style.css';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    search: Yup.string()
})

function Searchbar (e) {

    const [search, setSearch] = useState('')

    // const formik = useFormik({
    //     initialValues: {
    //         search: 'Search'
    //     },
    // validationSchema: validationSchema,
    const onSubmit = (values) => {
        axios.get('http://localhost:3001/api/books/' + search)
        .then(res => console.log(res))
        console.log(search)
    }
    

    // const handleChange = (e) => {
    //     setSearch(e.target.value)
    // }


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
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button color='primary' onClick={onSubmit} id='bttn' variant='contained' type='submit' fullWidth>Search</Button>
        </Card>
        </Grid>
    )
}

export default Searchbar