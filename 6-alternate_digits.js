(function(a,b){
var c = 1;
var r = 0;

while(a!==0 && b!==0){
var x = (a%10)*c;
var y = (b%10)*c*10;
  r=r+x+y;
  a=parseInt(a/10);
  b=parseInt(b/10);
  c*=100;
}
r = r+((a+b)*c)
return r;

})(1234,456789);
