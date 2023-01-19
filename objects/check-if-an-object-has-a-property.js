let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
 if(userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Ryan') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Jeff')){
   return true
 }
 return false

//  function isEveryoneHere(userObj) {
//   return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//     userObj.hasOwnProperty(name)
//   );
  // Only change code above this line
}

console.log(isEveryoneHere(users));