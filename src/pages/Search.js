import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';

function Search () {
    return(
    <div>
        <Navbar NavBut="Saved"/>
        <Header title="Search Google Books"/>
        <Searchbar />
    </div>
    )
}

export default Search;