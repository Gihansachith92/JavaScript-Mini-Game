alert("Welcome to the Game !! ")
alert("Click shapes under 2 seconds to Win!!! Good Luck...!")
alert("*** If you redy press ok to Play ****")
var start = new Date().getTime();

         function getRandomColor(){

             var letters = '123456789ABCDEF';
             var color = '#';

             for(var i=0; i<6; i++){
                 color += letters[Math.floor(Math.random()*15)];
             }

             return color;
         }

         function shapeAppear(){

             var top = Math.random()*450;
             var left = Math.random()*1200;

             var width = Math.random()*150;

          if(Math.random() > 0.5){
             document.getElementById("shape").style.borderRadius = "50%";
          }
          else{
             document.getElementById("shape").style.borderRadius = "0%"; 
          }

             document.getElementById("shape").style.height = width + "px";
             document.getElementById("shape").style.width = width + "px";

             document.getElementById("shape").style.top = top + "px";
             document.getElementById("shape").style.left = left + "px";
             document.getElementById("shape").style.display = "block";

             document.getElementById("shape").style.backgroundColor = getRandomColor();

             start = new Date().getTime();
         }

         function shapeAppearDelay(){
         setTimeout(shapeAppear, Math.random()*1500);
         }

         shapeAppearDelay();

         document.getElementById("shape").onclick = function(){

            document.getElementById("shape").style.display = "none";

            var end = new Date().getTime();

            var time = (end - start)/1000;  
            document.getElementById("time").innerHTML = time + "s";
            shapeAppearDelay();
            if(time>2){
               alert("You Lose..!!!! Try again .Click under 2 second.");
            }

         }
