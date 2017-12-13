//Bug and error handling
//let define a type of error to catch and create an instance of it
function MultiplicatorUnitFailure(message){
    this.message=message;
    this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name="MultiplicatorUnitFailure";

function primitiveMultiply(a,b) {
    var number1 = a;
    var number2 = b;
    if(isNaN(number1) || isNaN(number2)){
        throw new MultiplicatorUnitFailure("Invalid input")
    }
    else{
        var result = number1 * number2
        return number1 * number2
    }
}

for(;;){
    try{
        var mult=primitiveMultiply(3,5);
        console.log(mult)
        break;
    }
    catch(e){
        if(e instanceof MultiplicatorUnitFailure)
            console.log("Not a valid input.Try again.")
        else
            throw e;
    }
}
//var mult = primitiveMultiply(3, 5)
//console.log(mult)