//here If we have no type then if user enter some faulty value 
// then it will return unexpected result

//to avoid error typescript type is used
function add (n1:number,n2:number){
    return n1+n2;
}

const num2 = 2.8;
//const num1 = 5 -> this will result 7.8
//const num1 = '5'; -> this will result 52.8 in normal js
//const num1 = "5"; -> Argument of type '"5"' is not assignable to parameter of type 'number'.
const num1 = '5'
const result = add(num1,num2);

console.log(result)