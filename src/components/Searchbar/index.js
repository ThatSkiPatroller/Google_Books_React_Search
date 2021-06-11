import React, {useState} from 'react';
import { Card, TextField, Button, Grid } from '@material-ui/core';
import { useFormik } from "formik";
import * as Yup from "yup";
import './style.css';
import axios from 'axios';


function Searchbar (props) {

    const apiKey = 'AIzaSyBnAsEf6nQxgoZchu_-fhVa3qleLyxjhuo'

    const [search, setSearch] = useState('');
    const [cards, setCards] = useState([]);

    // const formik = useFormik({
    //     initialValues: {
    //         search: 'Search'
    //     },
    // validationSchema: validationSchema,

    // this needs to call the google api instead of mongo
    const onSubmit = (values) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key' + apiKey)
        .then(res => {
        console.log(res)
        if (res.data.items.length > 0) {
            setCards(res.data.items)
            props.makeCards(res.data.items);
        }}
        )
        // how to send res to results module ??
        // setSearch(res)
        console.log('cards: ', cards)
    } 

    const handleCards = () => {
        const data = cards.map((item, i) => {
            let picture = '';
            if (data.volumeInfo.imageLinks.thumbnail) {
                picture = data.volumeInfo.imageLinks.thumbail;
            }

            return (
                <Card>

                </Card>
            )
        })
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