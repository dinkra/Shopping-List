// $(document).ready(function() {
// 	var list_item = $('<li>Milk</li>');
// 	$('li').after(list_item);

// 	$('button').click(function(){
//     $('.list').append($('<li>', {
//          text: $('.textbox').val()
//     }));
// });
// });


$(document).ready(initializeForm);

function initializeForm() {

    // initialize the app
    var itemCount = 0;
    var itemInput = $("input#item");
    itemInput.val("");

    // define what happens when we click the "Add Item" link
    $("#add-item").click(shoppingList);
    $("#item").keydown(function (enter) {
        if (enter.keyCode == 13) {
            shoppingList();
        }
    });

    function shoppingList() {
        if (itemInput.val() === '') {
            return;
        }
        // get the items list and item to add
        var items = $("ul#items");
        var purchased = $("ul#purchased");
        var itemToBuy = itemInput.val();
        itemInput.val("");

        // create a list item and checkbox, assigning an id to it.
        // var doneName = "<input type='checkbox' name=" + itemToBuy + " value=" + itemToBuy + "> ";
        var doneName = " <a class='delete' href='#'> Delete</a> ";
        var listItem = $("<li>" + itemToBuy + doneName + " <a class='done' href='#'> Done</a></li>");
        listItem.attr("id", "item[" + itemCount+++"]");
        addItem(listItem);

        //delete items
        listItem.find("a").click(function () {
            $(this).parent().hide('slow', function () {
                $(this).remove();
            });
        });

        // add the item to the list. initially hidden, then slide in slowly
        function addItem(listItem) {
            listItem.hide();
            items.append(listItem);
            listItem.show('slow');
        }
        // move the corresponding list item to 'purchased' when checkbox is clicked.
        function purchasedItem(listItem) {
            listItem.hide();
            purchased.append(listItem);
            listItem.show('slow');
        }
        //toggle!! (sorta)
        listItem.find("input:checkbox").click(function () {
            this.checked ? purchasedItem(listItem) : addItem(listItem);
        });

        // clear input and refocus
        itemInput.focus();
    }
}
