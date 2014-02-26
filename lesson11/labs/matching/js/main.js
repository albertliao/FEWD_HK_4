
$(".cards").on('click',function(event){
	event.preventDefault();
	alert("this has been clicked");
	$(this).css(".selected.king");

});