$(document).ready(function() {
 $("button#bark").click(function() {
   $("ul#dog").prepend("<img src=images/happyDog.jpg>");
   $("ul#cat").prepend("<img src=images/happyCat.jpg>");
   $("ul#dog").children("img").first().click(function() {
    $(this).remove();
  });

  $("ul#cat").children("img").first().click(function() {
    $(this).remove();
   });
 });

 $("button#growl").click(function() {
   $("ul#dog").prepend("<img src=images/angryDog.jpg>");
   $("ul#cat").prepend("<img src=images/angryCat.jpg>");
   $("ul#dog").children("img").first().click(function() {
     $(this).remove();
   });

   $("ul#cat").children("img").first().click(function() {
     $(this).remove();
    });
 });

 $("button#wag").click(function() {
  $("ul#dog").prepend("<img src=images/waggingDog.jpg>");
  $("ul#cat").prepend("<img src=images/purringCat.jpg>");
  $("ul#dog").children("img").first().click(function() {
    $(this).remove();
  });

  $("ul#cat").children("img").first().click(function() {
    $(this).remove();
   });
 });

});
