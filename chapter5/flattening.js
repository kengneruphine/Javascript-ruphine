//combining an array of arrays into a single array
var array=[[1,2,3,4],['grace','jane','vis']]

var array2 = array.reduce(function(a,b){
    return a.concat(b);
},[]) //pass empty array as initial value

console.log(array2)