$(document).ready(function() {
 $("button#bark").click(function() {
   $("ul#dog").prepend("<li>Bark bark!</li>");
   $("ul#cat").prepend("<li>Meow meow!</li>");
   $("li").click(function() {
     alert("hi");
   });
 });

 $("button#growl").click(function() {
   $("ul#dog").prepend("<li>Growl!</li>");
   $("ul#cat").prepend("<li>Hiss!</li>");
   $("li").click(function() {
     alert("hi");
   });
 });

 $("button#wag").click(function() {
  $("ul#dog").prepend("<li>*Wags tail*</li>");
  $("ul#cat").prepend("<li>Purrrr</li>");
  $("li").click(function() {
    alert("hi");
    });
  });

});
