function findDuplicates(array) {
    var d = [];
    for(var i=0;i<array.length;i++){
        if(array[i] === array[i+1] && d.indexOf(array[i]) === -1){
            d.push(array[i]);
        }
    }
    return d.length;
}
console.log('Input: [1,5,5,5,7,7,7,9], Output: '+ findDuplicates([1,5,5,5,7,7,7,9]));
console.log('Input: [1,5,5,5,7,7,7,9,9], Output: '+ findDuplicates([1,5,5,5,7,7,7,9,9]));
