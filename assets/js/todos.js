// when items are clicked give them the class of completed and toggle the class
$('li').click(function() {
	$(this).toggleClass("completed");
});

// click on X to delete the To-Do
$("span").click(function(event) {
	// remove the parent li item by using fadeout animation
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// stop the event propagation to enclosing tags
	event.stopPropagation();
})