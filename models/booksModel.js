const mongoose = require('mongoose');

const booksSchema = {
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
}

const Books = mongoose.model('Books', booksSchema)

module.exports = Books;