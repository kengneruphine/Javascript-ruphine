// program the count the number of Bs in a string
var countBs = function(s){
    var len = s.length
    var count = 0
    for(var i = 0; i < len;i++){
        if (s.charAt(i)=='B')
            count ++

    }
    return count
}

var countChar = function(str,n) {
    var len = str.length
    var count = 0
    for(var i =0;i<len;i++){ 
        if(str.charAt(i) == n)
            count ++
    }
    return count
}

console.log("number of Bs are " + countBs("BeBeBBB"))
console.log("counting number of n :" + countChar('banana','n'))