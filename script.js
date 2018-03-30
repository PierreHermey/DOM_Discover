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

var move = document.body.addEventListener;

move('keydown',function(event){
 //gauche
  if (event.keyCode==37){
   var left = rect.style.left.replace('px', '');
   console.log(left);
  if (left > 0) {
   rect.style.left=(rect.style.left.replace('px','')*1)-1 + "px";
  }
  
  }
  //droite
  if (event.keyCode==39){
  rect.style.left=(rect.style.left.replace('px','')*1)+1 + "px";
  }
  //haut
  if (event.keyCode==38){
   var top = rect.style.top.replace('px', '');
   console.log(top);
   if (top > 0){
  rect.style.top=(rect.style.top.replace('px','')*1)-1 + "px";
   }
  }
  //bas
  if (event.keyCode==40){
  rect.style.top=(rect.style.top.replace('px','')*1)+1 + "px";
  }
  
})