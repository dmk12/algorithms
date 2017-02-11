function f(num){
  var i = 10;
  var arr = [];
  while(num > 1){
    arr.unshift(num%i);
    num -= num%i;
    i*=10;
  }
  return arr;
}
console.log(f(3663436363)); // returns [3000000000, 600000000, 60000000, 3000000, 400000, 30000, 6000, 300, 60, 3]
