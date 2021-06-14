import React from 'react';
import axios from 'axios';

function SavedBooks () {
    componentDidMount() {
        window.addEventListener('load', this.handleLoad)
    }

    handleLoad() {
        axios.get('/')
    }
}

export default SavedBooks();