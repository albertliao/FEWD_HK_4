$(document).ready(function(){
  $("#mobile-btn").click(function(){
    var $this = $(this);
    if ($this.hasClass("active")) {
      // if the button is in active state, hide the menu
      $("#page-header nav li:not(#mobile-btn)").slideUp();
    } else {
      // if the button is in not active, show the menu
      $("#page-header nav li:not(#mobile-btn)").slideDown();
    }

    // Toggle the button state
    $this.toggleClass("active");
  });
});