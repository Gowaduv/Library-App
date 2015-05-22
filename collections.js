//need to make an empty library
//need to be able to add shelves to library
//need to be able to add book titles to shelves
//author info is a property of books
require(["require", "shelves"], function(require){
	var Collection = require("shelves");
});

function Library(name, ID) {
	this.ID = ID;
    this.name = name;
    this.shelves = [];
    this.nextBookID = 1;
    this.nextShelfID = 1;
}
Library.prototype.libraryShelfList = function() {
    var libraryShelfList = "";
    for (var i = 0; i < this.shelves.length; i++) {
        libraryShelfList += this.shelves[i].name + "\n";
    }
    return libraryShelfList
}
Library.prototype.libraryBookList = function() {
    var libraryBookList = "";
    for (var i = 0; i < this.shelves.length; i++) {
        for (var k = 0; k < this.shelves[i].books.length; k++) {
            libraryBookList += this.shelves[i].books[k].name + "\n";
        }
    }
    return libraryBookList
}

Library.prototype.addShelf = function(shelfName) {
    var shelf = new Shelf(shelfName, this.nextShelfID);
    this.nextShelfID++;
    this.shelves.push(shelf);
    return shelf;
}

// Library.prototype.subtractShelf = function(shelfName) {
//     console.log("What is shelfName? " + shelfName); //this is a number
//     var shelfRemove = this.shelves[shelfID];
//     shelf = Object.keys(Library).forEach(function(ShelfID, {name: shelfName}) {
//         this.shelves.splice(shelfRemove);
//     })
//     return shelfRemove;
// }, Library;

Library.prototype.subtractShelf = function(shelfName) {
console.log("In Library.js - What is shelfName? " + shelfName); //this is a number
console.log("this ");
console.log(this);
this.shelves
if (!this.hasOwnProperty(shelfName))
    return
if (isNaN(parseInt(shelfName)) || ! (this instanceof Shelf))
    delete this[shelfName]
else
    this.splice(shelfName, 1)
};
console.log("After subtractShelf: ");
console.log(Library);
// module.exports = Collection;