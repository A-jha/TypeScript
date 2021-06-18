function combine(input1, input2, literal) {
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        literal === "as_num") {
        var result = +input1 + +input2;
        return result;
    }
    else {
        var result = input1.toString() + input2.toString();
        return result;
    }
}
//call using as number literal
var combined_as_num = combine(5, "6", "as_num");
console.log(combined_as_num);
var string_to_num = combine("A", "B", "as_num");
console.log(string_to_num);
