## Chapter-2 Working With Types

- JavaScript uses 'dynamic types'(sessolved at runtime), TypeScript uses 'Static types'(set during development).

- TypeScript's type system only helps during development (i.e. before code gets compiled)

## Core Types

- ### Number
  - 1,5.3,10
  - All Numbers No difference between numbers and float.
  - How to declare :
    ```typescript
    n1: number;
    ```
- ### String

  - 'Hi ,"Hi" , `Hi`
  - All Text Values

    ```typescript
    phrase: string;
    ```

- ### boolean

  - true, false

    ```typescript
    isTrue: boolean;
    ```

- ### Object

  - { age:30 }
  - Any JavaScript object, more specific types (type of object) are possible.
    ```typescript
    const person = {
      name: "Avi",
      age: 21,
    };
    console.log(person.name);
    ```

- ### Array

  - [1, 2, 3] or ["Avi",21,'Bihar']
  - In Typescript any Javascript array can be supported
  - Type of array can be flexixible or strict
    ```typescript
    const person = {
      name: "Avi",
      age: 20,
      hoobies: ["cricket", "chess", "learning"],
      subject: ["scince", 9],
    };
    ```
  - we can declare type

    ```typescript
    let books: string[]; //a book array of type string
    ```

- ### Tuple

  - [1, 2]
  - Not Present in Javascript
  - Added by typescript

  - It a Fixed length and fixed type Array
    ```typescript
    const person: {
      name: string;
      id: number;
      student: [number, string]; //it a tuple which contains only two  value such that one value is number and other is string.
    };
    ```

- ### Enum

  - enum {NEW, OLD}
  - Added by typescript.
  - Atomatically enumerated global constant identifiers.

  - Naming is gednerally in UPPERCASE.
    ```typescript
    enum Role {
      ADMIN,
      READ_ONLY,
      AUTHOR,
    }
    console.log(Role[1]); //READ_ONLY
    console.log(Role.READ_ONLY); //index of READ_ONLY
    ```
  - We c an add custom value
    ```typescript
    enum Role {
      ADMIN = 8000,
      R_USER = "R",
      U_USER = 0,
    }
    console.log("Satus : ", Role.Admin);
    ```

- ### Any

  - Any fuction are not uch used in typescript but we can use any function as fallback if we dont know waht type of data we are dealing with.

- ### Union

  - It is an special type which allows us to create a varible with multiple types.
  - `|` - this is called pipes and union basically pipes two type to one variable.

    ```ts
    inputA: number | string;
    ```

- ### Literals

  - Literals are some value impact the overall functionality if we add logic.
  - Let's say we have a function to combine two string/ num and we want as_num or as_string result.
  - Here as_num and as_string is literals.

    ```ts
    type literals = 'as_num' | 'as_text'
    function combine(
      input1:number | string,
      input2: number | string,
      //literal: string//another prams
      //literal:'as_num' | 'as_text'
      literals:literals
    )
    {
      code...
    }
    ```

- **alias to cobine two type to use in union type :**
  ```ts
  type cobined = number | string;
  const input1: number | string;
  //or we can write
  const input1: combined;
  ```

## Some Important point

**type of Operator** : Type of operator tells us the type of any varible

```typescript
console.log(typeof num1);
```
