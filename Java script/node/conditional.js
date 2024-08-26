// /*
// conditional operator in js
// Syntax:
// condition  ? "body of truth" : "body of false"





// */ 
// var n=100
// n > 0 
// ? console.log(n, 'is positive number')
// : console.log(n, 'is negative number')

// var m=-100
// m>0
// ? console.log(m, 'is positive number')
// : console.log(m, 'is negative number')

// n % 2 ==  0
// ? console.log( n + 'even number'):
// console.log(n + 'odd number')

// n % 2 != 0
// ? console.log( n + 'odd number'):
// console.log(n + 'even number')

var num = 16
;
var n1 = 3;
var n2 = 7;
(num % n1 == 0 &&
    num % n2 == 0)
    ? console.log("divisible by both 3 and 7")
    : (num % n1 == 0 || num % n2 == 0)
    ? num % n1 == 0
    ? console.log("divisible by",3, "not divisible by ",7)
    :console.log("divisible by",7,"not divisible by",3)
:console.log("not divisible by both",n1,"and",n2)

var reg_username



