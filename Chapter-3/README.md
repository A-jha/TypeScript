## Function in type script

- In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things.

## How to declare function

- return type : in ts we can add return type

  ```ts
  function add(n1: number, n2: number): number {
    return n1 + n2;
  }
  ```

- if return type is void than in javascript if we try to get return type than we will get `undefined` but in ts it is A valid type.
- **undefined** is a valid data type in ts too.

  ```ts
  function display(): void {
    console.log("hello G");
  }
  ```

## Function datatype

```ts
//type of combineValues is of function type
let combineValues: Function;

combineValues = add;

console.log(combineValues(3, 7));
```

- if we call combine as number than it will through an error.

```ts
combineValues = 5; //Error:combine values is of function type and we are assigning number
```

## Declaration of function

- declaring a function that takes no prams and returning a number

```ts
let combinedVaqlue2: () => number;
```

- decalre afunction which takes one number and one string and return a number

```ts
let combineValue3: (a: number, b: string) => number;
```

- ### Named Function vs Anonymous function

  ```ts
  function add(x: number, y: number): number {
    return x + y;
  }

  let myAdd = function (x: number, y: number): number {
    return x + y;
  };
  ```

## callback function

- function inside function to perform specific task
- declaration of callback function

```ts
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}
```

```ts
addAndHandle(2, 212, (result) => {
  try {
    const a = combineValues(10, 20);
    console.log(`combinecd value after await is ${a}`);
  } catch (error) {
    console.error(error);
  }
  console.log(result);
});
```

## Unknown type

- Type unknown is unknown to compiler such that we can not store unknow type to any other type .
- unknow is different from any in a way that typescript allows assignment operation on any by assignment to typed varible from unknown is not a valid syntax in typescript.

```ts
let users: unknown;
let usersName: string;

users = 5;
users = "avinash";

userName = users; //this will though an error that type of users is unknown
```

- to store the value of unknown we have to check the type first

```ts
if (typeof users === "string") {
  userName = users; //it is accepted now because ts has idea that the value inside unknown is string
}
```

- unknown is better than any because for assignment first we have to check the type of value stored in unknown.

## never type

- the use case of never is in below conditions where an error ocurred and code execution stoped

```ts
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("hola dada", 121);
```
