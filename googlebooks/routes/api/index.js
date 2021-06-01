const router = require('express').Router();
const Books = require('../../models/booksModel')

router.route('/books').get((req, res) => {
    Books.find()
    .then(foundBooks => res.json(foundBooks))
});

router.route('/books').post((req, res) => {
    const title = req.body.title;
    const authors = req.body.authors;
    const description = req.body.description;
    const image = req.body.image;
    const link = req.body.link;
    const newBook = new Books({
        title,
        authors,
        description,
        image,
        link
    })

    newBook.save();
})

module.exports = router;