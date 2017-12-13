//A constructor vector that represent a constructor in two dimensional space
function Vector(x,y){
    this.x = x;
    this.y = y;

}
Vector.prototype.plus = function (other) {
    return  new Vector(this.x + other.x , this.y + other.y)
};

Vector.prototype.minus = function (other) {
    return new Vector(this.x-other.x , this.y-other.y)
}

Vector.prototype.getLength = function(){
    return Math.sqrt((this.x * this.x) + (this.y *this.y))
}

//creating instances of the vector object

var newVector = new Vector(3,4)
var p1 = new Vector(2,1)
var p3 = p1.plus(newVector)
var p4 = newVector.minus(p1)
console.log(p3)
console.log(p4)
console.log(newVector.getLength())