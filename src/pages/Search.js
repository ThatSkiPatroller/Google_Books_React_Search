import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Results from '../components/Results'

function Search () {

    const [books, setBooks] = useState([])

    const makeCards = (response) => {
        console.log(response);
        setBooks(response);
    }

    return(
    <div>
        <Navbar NavBut="Saved"/>
        <Header title="Search Google Books"/>
        <Searchbar makeCards={makeCards}/>
        <Results books={books} />
    </div>
    )
}

export default Search;