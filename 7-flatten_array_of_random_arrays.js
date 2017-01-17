var flatArr = [];
function f(arr) {
  for(var i=0; i< arr.length; i++) {
    if(Array.isArray(arr[i])){
      f(arr[i]);
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}
console.log(f([[1,2,[3]],4])); // returns [1,2,3,4]
