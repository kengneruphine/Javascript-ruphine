//function to reverse an array
var reverseArray = function (arr) {
    var arr1=[]
    var len = arr.length
    for(var i = 0;i<=len-1;i++){
        arr1.unshift(arr[i])

    }
    return arr1
}

var array=[1,2,3,4,5]
console.log(reverseArray(array))

//another method for reversing
var Reverse = function (arr) {
    var arr1 =[]
    var len = arr.length
    for(var i =len-1 ;i>=0;i--){
        arr1.push(arr[i])
    }
    return arr1
    
}
console.log(Reverse([1,2,3,4,5]))


//reversing an array in place
var reverseInPlace = function (arr) {
    var n=arr.length
    var temp =null
    middle=Math.floor(n/2)
    for(var i =0;i<=middle;i++){
        temp=arr[i]
        arr[i]=arr[n-1-i]
         arr[n-1-i]=temp
        
    }
    return arr
    
}
console.log(reverseInPlace([1,2,3,4,5]))















