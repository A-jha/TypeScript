//here If we have no type then if user enter some faulty value 
// then it will return unexpected result
//to avoid error typescript type is used
function add(n1, n2) {
    return n1 + n2;
}
var num2 = 2.8;
//const num1 = 5 -> this will result 7.8
//const num1 = '5'; -> this will result 52.8 in normal js
//const num1 = "5"; -> n1 is not defined
var num1 = '5';
var result = add(num1, num2);
console.log(result);
