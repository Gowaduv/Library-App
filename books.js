// //these are the books
// //they need to have titles and authors
// //they need to show which shelf they're on
// //they need to also show which collection they're in
// //they should editable and deletable

// $("#new-item").keypress(function(e) {
// 	if (e.which == 13) { //press enter key
// 		$("#add").click(); //trigger click event
// 		return false;
// 	}
// });
// $("#add").on("click", function() {
// 	var item = $("#new-item").val();

// 	if ($.trim($("#new-item").val()) === "") { //no empty list items
// 		event.preventDefault();
// 		alert("Please add an item");
// 	} else {
// 		$("#todoList").append("<li><input type='checkbox' class='done' /><span class='todo-content'>" + item + " </span><button class='delete'>Delete</button> <button class='edit'>Edit</button></li>");
// 		$("#new-item").val("");
// 	}

// });


// $(document).on("click", ".delete", function() { //delete items 
// 	$(this).parent().remove();
// });

// $(document).on("click", ".edit", function() {
// 	var editedItem = prompt("enter corrected list item");
// 	$(this).parent().find(".book-content").text(editedItem);
// });

// $(document).on("click", ".done", function() { //line through completed items
// 	if ($(this).parent().css("textDecoration") === "line-through") {
// 		$(this).parent().css("textDecoration", "none");
// 	} else {
// 		$(this).parent().css("textDecoration", "line-through");
// 	}
// });