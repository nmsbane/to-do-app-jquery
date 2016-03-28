// when items are clicked give them the class of completed and toggle the class
$('li').click(function() {
	$(this).toggleClass("completed");
});