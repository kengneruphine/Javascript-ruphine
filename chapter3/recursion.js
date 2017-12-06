//recursive function to check if a number is even or not
var isEven = function(n){
    if (n == 0)
        return true
    else if (n == 1)
        return false
    else
        return isEven(n-2)    

}

console.log("is 75 even? " + isEven(75))
console.log("is 50 even? " + isEven(50))