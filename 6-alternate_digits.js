function alternate(a,b){
    var c = 1;
    var r = 0;

    while(a!==0 && b!==0){
        var x = (a%10)*c;
        var y = (b%10)*c*10;
        r+=(x+y);
        a=parseInt(a/10);
        b=parseInt(b/10);
        c*=100;
    }
    r+=((a+b)*c)
    
    if(r > 100000){
        return -1;
    }
    return r;
}

console.log(alternate(12,56)); // returns 5162
console.log(alternate(12,456)); // returns 45162
console.log(alternate(123,456)); // returns -1
