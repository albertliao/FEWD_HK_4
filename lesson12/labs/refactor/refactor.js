// 1
$("body").append("<img src='Will.jpg' alt='William\'s picture'><p>The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>");



// 2
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");



// 3
$("#container").css("width","960px");
$("#container").css("background","red");
$("#container").css("color","purple");
$("#main").css("width","960px");
$("#main").css("background","red");
$("#main").css("color","purple");



// 4
$("input").css("width","200px")
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");