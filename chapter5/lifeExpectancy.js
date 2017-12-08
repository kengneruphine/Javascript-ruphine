// computing the historical life expectancy
function average(array) {
    function plus(a, b) {   //sum all the values in the array
        return a + b;
    }
    return array.reduce(plus) / array.length; //get average by dividing the sum of all values by the length of array passed
}

var century = ancestry.map(function(person){
    return Math.ceil(person.died / 100)
})