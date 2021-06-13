# Introduction to TypeScript

TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.

### How Typescript works ?

All valid JavaScript code is also TypeScript code. You might get type-checking errors, but that won't stop you from running the resulting JavaScript. While you can go for stricter behavior, that means you're still in control.

TypeScript code is transformed into JavaScript code via the TypeScript compiler or **Babel** . This JavaScript is clean, simple code which runs anywhere JavaScript runs: In a browser, on Node.JS or in your apps.

### Why do we need typeScript ?

```Javascript
function add(num1, num2){
    return num1 + num2;
}
console.log(add('2','3'))
//output is 23
```

- Here in the above code we have unwanted behavior at Runtime.
- Typescript allows us to write types of the variable so that we can prevent these erros.

- Type script allows us to write Next-Generation Javascript code Features (compiled down by tool like babel to older browser)

- TypeScript add some features like Interfaces or Generics which is NOn-Javascript.
- Typescript Provides us Meta-Programming Features Like Decorators.
- Typescript is highly configurable.

### defer at the end of script

- This Boolean attribute is set to indicate to a browser that the script is
  meant to be executed after the document has been parsed, but before firing
  DOMContentLoaded.
- Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished
  evaluating.
- This attribute must not be used if the src attribute is absent
  (i.e. for inline scripts), in this case it would have no effect. To achieve
  a similar effect for dynamically inserted scripts use async="false" instead.
- Scripts with the defer attribute will execute in the order in which they
  appear in the document.
