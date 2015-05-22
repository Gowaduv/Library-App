// Model a library using objects. *  
// A library contains shelves. Shelves contain books. Books have an author and a title. 
// Give the library methods to add and remove a shelf. 
// A shelf should have methods to add/remove a book. 
// Use a modular approach so that each type of object is contained in its own file. Add any functionality you think appropriate.
require(["require", "collections"], function(require) {
	var Collection = require("collections");
});
var libraries = [];
var currentLibraryID = 1;

function displayLibraries() {
	console.log(libraries);
	for (var i in libraries) {
		var library = libraries[i];
		console.log(library);
		var dispLib = $("li.library-" + library.ID).length;
		if (!dispLib) {
			$("#collection").append("<li class='library-" + library.ID + "'><span class='collection-content'>" + library.name +
				" </span><button class='delete'>Delete</button> <button class='edit'>Edit</button></li>");
		}
	}
}

$("#selectItem").change(function() {
	var selectedValue = $(this).find(":selected").val();
	$("#addItemButton").unbind('click');
	if (selectedValue === "optionCollection") {
		$("#addItemButton").bind("click", function() {
			addCollection()
		});
	} else if (selectedValue === "optionShelf") {
		$("#addItemButton").click(function() {
			addShelf()
	});
	}
	// $("#addItemButton").click(function() {

	// });
});

// $("#new-item").keypress(function(e) {
// 	if (e.which == 13 || e.which == 9) { //press enter or tab
// 		$("#add-collection").click(); //trigger click event
// 		return false;
// 	}
// });
// $("#add-collection").on("click", function() {
function addCollection() {
	var text = $("#new-item").val();
	console.log("add-collection is activating");
	if ($.trim($("#new-item").val()) === "") { //no empty list items
		event.preventDefault();
		alert("Please add an item");
	} else {
		console.log(currentLibraryID);
		library = new Library($("#new-item").val(), currentLibraryID);
		currentLibraryID = currentLibraryID + 1;
		console.log(currentLibraryID);
		console.log("server.js says: ");
		console.log(library);
		libraries.push(library);
		console.log("line 32");
		console.log(libraries);
		displayLibraries();
	}
};



$(document).on("click", ".delete", function() { //delete items 
	var libRemove = $(this).parent;
	console.log("libRemove");
	console.log(libRemove);
	var elementIndex;
	for (var i in libraries) {
		if (libraries[i].ID === libRemove) {
			elementIndex = i;
		}
	}
	libraries.splice(elementIndex, 1);
	$(this).parent().remove();
});

$(document).on("click", ".edit", function() {
	var editedText = prompt("enter corrected list item");
	$(this).parent().find(".collection-content").text(editedText);
	var libRemove = $(this).parent().attr('class');
	var parts = libRemove.split("-");

	var elementIndex;
	for (var i in libraries) {
		console.log("parts:");
		console.log(parts[1]);
		if (libraries[i].ID == parts[1]) {
			elementIndex = i;
		}
	}
	var libraryUpdate = libraries[elementIndex];
	libraryUpdate.name = editedText;
	console.log("libraryUpdate");
	console.log(libraryUpdate);
});