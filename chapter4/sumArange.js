//range funtion
var range = function (start,end) {
    var arr= [];
    for(var i=start; i <= end;i++){
        arr.push(i)
    }
    return arr
}

console.log(range(1,10))

//sum function to add elements in an array
var sum = function(arr) {
    var len= arr.length
    var result = 0
    for(var i =0;i<=len-1;i++){
        result +=arr[i]
    }
    
    return result
}

console.log("suming of elements in array " + sum(range(1,10)))

//range function with step increment
var range2 = function (start, end,step) {
    var arr = []
    var i = start
    while(i<=end){
        arr.push(i)
        i+= step

    }
    
    return arr
}

console.log(range2(1,10,2))