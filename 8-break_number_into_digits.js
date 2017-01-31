function f(num) {
  var i = 10;
  var arr = [];
  while(num > 1){
    arr.unshift(num%i);
    num = num/i - (num%i/i);
  }
  return arr;
}
console.log(f(36)); // returns [3, 6]
console.log(f(3663436363)); // returns [3, 6, 6, 3, 4, 3, 6, 3, 6, 3]
