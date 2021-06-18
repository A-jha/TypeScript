function combine(
  input1: number | string,
  input2: number | string,
  literal: "as_num" | "as_text" // here we are allowing only these two strings
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    literal === "as_num"
  ) {
    const result = +input1 + +input2;
    return result;
  } else {
    const result = input1.toString() + input2.toString();
    return result;
  }
}

//call using as number literal
const combined_as_num = combine(5, "6", "as_num");
console.log(combined_as_num);

const string_to_num = combine("A", "B", "as_num");
console.log(string_to_num); //results nan
