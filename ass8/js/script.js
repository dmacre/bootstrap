 $(document).ready(function() {
     // $("p").mousehover(function() {
     //     $("p").color.purple();
     // });

     var name = "dan";

     $(".button1").click(function() {
         console.log(name);

     });

     $(".button2").click(function() {
         for (i = 1; i < 11; i++) {
             console.log(i);
         }
         
     });


 });
$( "li" ).each(function( index ) { console.log( index + ": " + $( this ).text() ); });