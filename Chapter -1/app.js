const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const button = document.getElementById("btn");
const textArea = document.getElementById("sum");

button.addEventListener("click", () => {
  textArea.innerText = add(+input1.value, +input2.value);
});

const add = (num1, num2) => {
  return num1 + num2;
};
