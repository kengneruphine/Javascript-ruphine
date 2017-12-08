//Every and some function using predicate functions
function every(array,predicate){
    for(var i =0;i<array.length;i++){
        if(i === array.length-1 && predicate(array[i])){
            return true;
        }
        else if(!predicate(array[i])){
            return false
        }
    }
};

function some(array,predicate){
    for(var i=0;i<array.length;i++){
        if(predicate(array[i])){  // when the first element is true
            return true
        }
        else{
            return false
        }
    }
};


console.log('test 1 = ' + every([NaN, NaN, NaN], isNaN)); 
console.log('test 2 = ' + every([NaN, NaN, 4], isNaN)); 
console.log('test 3 = ' + some([NaN, 3, 4], isNaN)); 
console.log('test 4 = ' + some([2, 3, 4], isNaN)); 