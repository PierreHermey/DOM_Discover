
function changeHeight() {
	var rect = document.getElementById('rectangle'); 
  if ( rect.clientHeight < 300 ){
   	console.log(rect.clientHeight);
    rect.style.height =	(rect.clientHeight + 10) + "px";
  console.log(rect.clientHeight + 10);
  }
   if ( rect.clientHeight >= 300 ){
   	rect.style.height = "100px";
  	
   }
 
}