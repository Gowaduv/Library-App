require(["require", "books"], function(require){
	var Books = require("books");
});

function Shelf(name, shelfID) {
    this.name = name;
    this.books = [];
    this.shelfID = shelfID;
}
Shelf.prototype.shelfBookList = function() {
    var shelfBookList = "";
    for (var i = 0; i < this.books.length; i++) {
        shelfBookList += this.books[i].name + "\n";
    }
    return shelfBookList
}


Shelf.prototype.enshelf = function(shelf) {
    shelf.books.push(this);
}
Shelf.prototype.unshelf = function(shelf) {
    var removeIndex = shelf.books.indexOf(this);
    shelf.books.splice(removeIndex, 1);
}

// module.exports = Shelf;