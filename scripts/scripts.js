$(document).ready(function() {
 $("button#bark").click(function() {
   $("ul#dog").prepend("<img src=images/happyDog.jpg>");
   $("ul#cat").prepend("<img src=images/happyCat.jpg>");

/*-----Sends an alert pop up to the user that clicking will remove the image-----*/
/*   $("img").childrenclick(function() {
     alert("This will remove the image!");
   });
/*
/*------end alert-----*/

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

   /*-----Sends an alert pop up to the user that clicking will remove the image-----*/
   /*   $("img").childrenclick(function() {
        alert("This will remove the image!");
      });
   /*
   /*------end alert-----*/

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

  /*-----Sends an alert pop up to the user that clicking will remove the image-----*/
  /*   $("img").childrenclick(function() {
       alert("This will remove the image!");
     });
  /*
  /*------end alert-----*/

  $("ul#dog").children("img").first().click(function() {
    $(this).remove();
  });

  $("ul#cat").children("img").first().click(function() {
    $(this).remove();
   });
 });

});
