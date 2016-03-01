function expand(n){
    var result = [];
    var ref = n.indexOf('.') !== -1 ? n.indexOf('.') : n.length;
    for(var i = 0; i < n.length; i++){
        if(n.charAt(i) === '0' || i === ref) continue;
        var zeros = '';
        var j = 0;
        if(i < ref){
            while(j < ref-i-1){
                zeros = zeros.concat('0');
                j++;
            }
            result.push(n.charAt(i)+''+zeros);
        }else{
            while(j < (i-ref-1)){
                zeros = zeros.concat('0');
                j++;
            }
            result.push('.'+zeros+''+n.charAt(i));
        }
    }
    return result;
}
console.log('Input: 7978901.897, Output: '+ expand('7978901.897'));
console.log('Input: 546789, Output: '+ expand('546789'));
console.log('Input: 50009, Output: '+ expand('50009'));
console.log('Input: 0, Output: '+ expand('0'));
console.log('Input: 0.0765, Output: '+ expand('0.0765'));
