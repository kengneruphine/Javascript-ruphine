//A series of digits to be match with a single regular expression
var express = /[-+]\d+\.\d+e\-\d{1,2}/;
console.log(express.test("-1.32e-34"))