var express = require('express');
mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function (req, res) {
        
        // Need much less code snippet to achieve the validation below
        var query = {}
        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
        if(req.query.title)
        {
            query.title = req.query.title;
        }
         if(req.query.author)
        {
            query.author = req.query.author;
        }
         if(req.query.read)
        {
            query.title = req.query.read;
        }


        Book.find(query, function (err, books) {
            if (err)
                res.status(500).send(err);
            else
                res.json(books);
        })
    })

app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('Welcome to my api');
});

app.listen(port, function () {
    console.log("Gulp is running on port:" + port)
})