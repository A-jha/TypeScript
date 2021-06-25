//function return number
function add(n1, n2) {
    return n1 + n2;
}
console.log("sum of two number 3 and 4 is " + add(3, 4));
//function returns void
function display(id, sName) {
    console.log("id of stident is " + id + " and name of student is " + sName);
}
display(13, "rachna");
// Declare a varible as function
var combineValues;
combineValues = add;
console.log(combineValues(3, 7));
//combineValues = 5;
//declare a function
var combineValues2;
combineValues2 = add;
console.log(combineValues2(4, 5));
// callback function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(2, 212, function (result) {
    try {
        var a = combineValues(10, 20);
        console.log("combinecd value after await is " + a);
    }
    catch (error) {
        console.error(error);
    }
    console.log(result);
});
//generate an error
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("hola dada", 121);
