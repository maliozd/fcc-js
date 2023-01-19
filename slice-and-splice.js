function frankenSplice(arr1, arr2, n) {
   let localArray = arr2.slice(); //returns -> 4 ,5
   for (let i = 0; i < arr1.length; i++){
     localArray.splice(n,0,arr1[i]) // add elements (where, how many to remove, element)
     n++

   }
  return localArray;
}
/*

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
  */
frankenSplice([1, 2, 3], [4, 5, 6], 1);