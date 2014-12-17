$(document).ready(function() {
	var list_item = $('<li>Milk</li>');
	$('li').after(list_item);

	$('button').click(function(){
    $('.list').append($('<li>', {
         text: $('.textbox').val()
    }));
});
});
