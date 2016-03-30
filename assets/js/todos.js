// when items are clicked give them the class of completed and toggle the class
// when an li is clicked inside an ul
// but u can't write $('li').on('click')
// add a listener to the entire ul
$('ul').on('click', 'li', function() {
	$(this).toggleClass("completed");
});

// click on X to delete the To-Do
// when span is clicked inside ul
$("ul").on('click', 'span', function(event) {
	// remove the parent li item by using fadeout animation
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// stop the event propagation to enclosing tags
	event.stopPropagation();
});


// add the new to-do item functionality
$("input[type='text']").on('keypress', function(event) {
	if(event.which === 13) {
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ toDoText + "</li>");
	}
});