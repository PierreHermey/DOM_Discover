var rect = document.getElementById('rectangle')
var classes = rect.classList

function toggleSize(){
  var mySizeClasses = document.getElementById("btn").classList;
  if (mySizeClasses.contains("textNormal")) {
  mySizeClasses.remove("textNormal");
  mySizeClasses.add("textGrow");
   }
  else {
  mySizeClasses.add("textNormal");
  mySizeClasses.remove("textGrow");
   }
  }
  
function changeHeight() {
 if ( rect.clientHeight < 300 ){
 rect.style.height =	(rect.clientHeight + 10) + "px";
 }
 if ( rect.clientHeight >= 300 ){
  rect.style.height = "100px";
 }
}

function toggleGreen(){
  if (classes.contains("blue"));{
  classes.remove("blue");
  classes.add("green");
 }
}

function returnBlue(){
  if (classes.contains("green"));{
    classes.remove("green");
    classes.add("blue");
  }
}

function disappear(){
  if (classes.contains("blue","green"));{
    classes.remove("blue","green");
    classes.add("disappear");
   }
 }
 
 function appear(){
 if (classes.contains("disappear"));{
  classes.add("appear","blue");
 } 
}
//gauche
document.body.addEventListener('keydown', function(event) {

 if(event.keyCode == 37)
    rect.style.left="500px"; 
})


document.body.addEventListener('keyup', function(event) {

  if(event.keyCode == 37) 
    rect.style.left="400px"; 
})
//haut
document.body.addEventListener('keydown', function(event) {

 if(event.keyCode == 38)
    rect.style.top="500px"; 
})


document.body.addEventListener('keyup', function(event) {

  if(event.keyCode == 38) 
    rect.style.top="600px"; 
})
//droite
document.body.addEventListener('keydown', function(event) {

 if(event.keyCode == 39)
    rect.style.right="500px"; 
})


document.body.addEventListener('keyup', function(event) {

  if(event.keyCode == 39) 
    rect.style.right="700px"; 
})
//bas
document.body.addEventListener('keydown', function(event) {

 if(event.keyCode == 38)
    rect.style.bottom="700px"; 
})


document.body.addEventListener('keyup', function(event) {

  if(event.keyCode == 38) 
    rect.style.bottom="600px"; 
})