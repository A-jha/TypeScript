//function return number
function add(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(`sum of two number 3 and 4 is ${add(3, 4)}`);

//function returns void
function display(id: number, sName: string): void {
  console.log(`id of stident is ${id} and name of student is ${sName}`);
}
display(13, "rachna");

// Declare a varible as function
let combineValues: Function;

combineValues = add;

console.log(combineValues(3, 7));

//combineValues = 5;

//declare a function
let combineValues2: (a: number, b: number) => number;

combineValues2 = add;
console.log(combineValues2(4, 5));

// callback function
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(2, 212, (result) => {
  try {
    const a = combineValues(10, 20);
    console.log(`combinecd value after await is ${a}`);
  } catch (error) {
    console.error(error);
  }
  console.log(result);
});

//generate an error

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("hola dada", 121);
