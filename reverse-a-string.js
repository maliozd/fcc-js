function reverseString(str) {
  let myString = "";
  for (let i = str.length-1; i >= 0; i--){
   myString += str[i]
  }

  return myString
}
// function reverseString(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
reverseString("hello");