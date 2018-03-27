function toggleSize(){
  var mySizeClasses = document.getElementById("btn").classList;
  if (mySizeClasses.contains("textNormal")) {
  mySizeClasses.remove("textNormal");
  mySizeClasses.add("textGrow");
  } else {
  mySizeClasses.add("textNormal");
  mySizeClasses.remove("textGrow");
  }
  }
  
  function changeHeight() {
  var rect = document.getElementById('rectangle'); 
  if ( rect.clientHeight < 300 ){
  rect.style.height =	(rect.clientHeight + 10) + "px";
  }
  if ( rect.clientHeight >= 300 ){
  rect.style.height = "100px";
  
  }
  }

  function toggleGreen(){
    var green = document.getElementById('rectangle').classList;
    if (green.contains("blue"));{
    green.remove("blue");
    green.add("green");
  }
  }

  function returnBlue(){
  var blue = document.getElementById('rectangle').classList;
  if (blue.contains("green"));{
    blue.remove("green");
    blue.add("blue");
  }
}
    
 