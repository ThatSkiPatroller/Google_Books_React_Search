const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://picklerick:picklerick123@cluster0.rpqxm.mongodb.net/googlebooks?retryWrites=true&w=majority')

app.use(require('./routes'));
app.listen(3001, function () {
    console.log("App listening on port 3001");
})
