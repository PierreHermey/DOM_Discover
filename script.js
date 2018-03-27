function toggleSize() {
  var mySizeClasses = document.getElementById("btn").classList;

  if (mySizeClasses.contains("textNormal")) {
    mySizeClasses.remove("textNormal");
  } else {
    mySizeClasses.add("textNormal");
  }
  if (mySizeClasses.contains("textGrow")) {
    mySizeClasses.remove("textGrow");
  } else {
    mySizeClasses.add("textGrow");
  }
}