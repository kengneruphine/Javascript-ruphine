//testing the present of substring in a string
var exp = /(car)\s(and)\s(cat)/
console.log(exp.test("i have a car and cat"))
var exp1 = /(pop)\s(and)\s(pro)p$/g
console.log(exp1.test("come and take pop and prop"))
var exp2 = /\w+(ious)/
console.log(exp2.test("graciou"))
var exp3=/\s\.\,\:\;/
console.log(exp3.test(" .,:;"))
var exp4=/\w{6,}/               //a word greater than 6 letters
console.log(exp4.test("villi"))
var exp5=/\w+^e/
console.log(exp5.test("etrueee"))