function findRepeating(string, substring) {
    var count = 0;
    var l = substring.length;
    for(var i = 0; i <= string.length-l; i++){
        if(string.substring(i,i+l) === substring){
            count++;
        }
    }
    return count;
}
console.log('Input: "xyabcdfgabcsjhgabc", Output: '+ findRepeating('xyabcdfgabcsjhgabc','abc'));
