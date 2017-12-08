//computing age difference between mother and child
function average(array){
    function plus(a,b){   //sum all the values in the array
        return a + b;
    }
    return array.reduce(plus)/array.length; //get average by dividing the sum of all values by the length of array passed
}

var byName=[];
ancestry.forEach(function(person){
    byName[person.name] = person;  //for each set of values,set the name of the object to the name.property object of array

});

//filter to have the records with values for mother
var newArray = ancestry.filter(function (person){
    return byName[person.mother] != null;
    
}).map(function(person){  //transform the array by returning the birthdate of the current array value
    return person.born - byName[person.mother].born; //subtract that value from that of the mother
});