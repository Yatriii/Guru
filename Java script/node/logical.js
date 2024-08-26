console.log('logical operator in javascript')
/*
logical Operator
1- logical and [ && ]
-condition1   condition2      result( condition1 && condition2)
-true          -true            true && true =>  true
-true          -false            true && false =>  false    
-false          -true            false && true =>  false
-false          -false            false && false =>  false
condition1  condition2 condition3   result( condition1 && condition2 && conditon3)
true          true      true        true && true && True =>  true
2-logical or [ || ]
-condition1   condition2      result( condition1 || condition2)
-true          -true            true || true =>  true
-true          -false            true || false =>  true    
-false          -true            false || true =>  true
-false          -false            false || false =>  false

3-logical not [ ! ]
true =>  !true  => false
false => !false  => true





*/
var a = 23
var b = 12
var result = a > 2
console.log(result)
var result1 = b > 1
console.log(result1)
console.log(a > 22 && b > 1)
console.log(result && result1)
console.log(result || result1)
console.log(!(result || result1))
console.log(!result || result1)

