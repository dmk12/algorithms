function palindromize(words) {
    var result = [];
    for(var i=0;i<words.length;i++){
        if(typeof words[i] !== 'string'){
            result.push('-1');
        }
        else{
            var word = words[i].split('');
            word.sort();
            var palindromized = [];
            var centerChar = '';
            for(var j = 0; j < word.length; j += 2){
                if(word[j] === word[j+1]){
                    palindromized.push(word[j]);
                    palindromized.unshift(word[j]);
                }else if(palindromized.indexOf(word[j]) === -1){
                    if(centerChar){
                        result.push('-1');
                        palindromized = [];
                        centerChar = '';
                        break;
                    }else{
                        centerChar = word[j];
                    }
                }
            }
            if(palindromized.length > 0){
                palindromized.splice(parseInt(palindromized.length/2), 0, l);
                result.push(palindromized.join(''));
            }
        }
    }
    return result;
}
function output(s){
    console.log(s);
    document.write(s + '<br/>');
}
output('Input: [3,"aba","abc","abba","cecarararar"], Output: '+ palindromize([3,'aba','abba','abc','cecarararar']));
