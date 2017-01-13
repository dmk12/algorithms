function alternate(a,b){
    var res = '';

    var strA = a.toString();
    var strB = b.toString();
    var i = 0;
    while(i<strA.length && i<strB.length){
        res = res.concat(strA.charAt(i), strB.charAt(i));
        i++;
    }
    if(i<strA.length){
        res = res.concat(strA.substr(i));
    }
    if(i<strB.length){
        res = res.concat(strB.substr(i));
    }
    
    res = Number.parseInt(res);
    if(res > 100000){
        return -1;
    }
    return res;
}

console.log(alternate(12,56)); // returns 1526
console.log(alternate(12,456)); // returns 14256
console.log(alternate(123,456)); // returns -1
