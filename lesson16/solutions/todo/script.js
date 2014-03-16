$("#add-todo-form").submit(function(e){
  // Prevent the form submission to refresh the page
  e.preventDefault();

  var itemName = $("#todo-name").val();
  var listItem = '<li><input value="' + itemName + '" disabled> <span class="edit">edit</span>' + ' <span class="remove">remove</span>' + '</li>';
  $("#todo-list").append(listItem);
  $("#todo-name").val("").focus();

  updateCount();
});

$("#todo-list").on("click", ".remove", function(){
  $(this).parent().remove();
  updateCount();
});

$("#todo-list").on("click", ".edit", function(){
  $(this).siblings("input").removeAttr("disabled");
});

$("#todo-list").on("keypress", "input", function(e){
  if(e.which == '13'){
    $(this).attr("disabled", "disabled");
  }
});

function updateCount() {
  var count = $("#todo-list li").length;
  $("#remain-items").text(count);
}