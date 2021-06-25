//Example of types

//const typoe must be inititialized
const studentId: number = 5; //number

const studentName: string = "Avinash"; //string

const isStudent: boolean = false; //boolean

//array
const hobbies: string[] = ["chess", "cricket", "Machine", "electic"];
//name
const stream_name: string = "Information Technology";

//date
const dateOfJoin = new Date().getDate().toString();

//tuple
const id: [number, string] = [1, "Avi"];
//Object
const stream = {
  name: stream_name,
  id: id,
  dateOfJoin: dateOfJoin,
  hobbies: hobbies,
};

console.log(stream);
