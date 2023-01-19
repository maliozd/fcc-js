function confirmEnding(str, target) {
  
  var lastLetter = str.substring(str.length-target.length,str.length)
 if (lastLetter == target)
  return true
  return false
}

confirmEnding("Bastian", "n");