//fizzbuss
for(var i=1; i<=100;i++){
    if (i % 3 ==0)
       console.log("Fizz");
    
    else if (i % 5 == 0 && i % 3!=0)
        console.log("Buss");

    else if (i % 5 == 0 && i % 3 == 0)
        console.log("FizzBuss")

    else
        console.log(i) 
} 


