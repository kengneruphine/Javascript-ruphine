//converting arrays to list and list to array
var arrayToList = function (arr) {
    var n =arr.length
    var list={}
    for(var i=n;i>=0;i--){
        var temp=null
        var temp = { value: arr[i+1],rest:temp }
        list={value:arr[i],rest:temp}
        
    }
    return list
}
var array=[1,2,3]
console.log( arrayToList(array))

var listToArray = function (list) {
    var array=[]
    for(var node = list;node; node=node.rest){
        array.push(node.value)

    }
    return array
}

console.log("list to array " + listToArray(arrayToList(array)))