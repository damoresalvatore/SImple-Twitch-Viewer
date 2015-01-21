function launch() {
  $(document).ready(function() {
  var i = 0;

     $('#dragbar').mousedown(function(e){

          // Because of some weird reasoning, you lose the ability to slide over when you hover over
          // the twitch stream. For this reason you hide everything but the bar when sliding
          $('#stream').css("visibility","hidden");
          $('#chat').css("visibility","hidden");

          e.preventDefault();

          $(document).mousemove(function(e){
            // Set the css to be the location of the cursor
            $('#sidebar').css("width",e.pageX+2);
            $('#main').css("left",e.pageX+2);
            $('#stream').css("width",e.pageX-3);
         })
         console.log("leaving mouseDown");
      });

     $(document).mouseup(function(e){
         // Show everything again
         $('#stream').css("visibility","visible");
         $('#chat').css("visibility","visible");
         
         $(document).unbind('mousemove');
        });
  });
}