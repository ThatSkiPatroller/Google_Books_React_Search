import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Saved () {
    return(
        <div>
            <Navbar NavBut="Search"/>
            <Header title="Saved Google Books" />
        </div>
    )
}

export default Saved;