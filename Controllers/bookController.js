var bookController = function(Book){

    var post = function (req, res) {
            var book = new Book(req.body);
            console.log(book);
            book.save();
            res.status(201).send(book);
        }

    var get = function (req, res) {

            // Need much less code snippet to achieve the validation below
            var query = {}
            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            if (req.query.title) {
                query.title = req.query.title;
            }
            if (req.query.author) {
                query.author = req.query.author;
            }
            if (req.query.read) {
                query.title = req.query.read;
            }

            Book.find(query, function (err, books) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(books);
            });
        }
        return {
            post: post,
            get: get
        
        }
}

module.exports = bookController;