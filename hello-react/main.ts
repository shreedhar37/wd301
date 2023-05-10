// function greetings() : void {
//     console.log("Hello friend");
// }

// function throwError() : never {
//     throw new Error("an error occured");
// }
// throwError();
//greetings();

// arrays 

// let credentials : [string, string] = ["shreedhar", "chavan"];
// console.log(credentials[0])

// interface User {
//     name: string;
//     id: number;
//     greet(): string;
// }

// const user: User  = {
//     name: "Shreedhar",
//     id: 1,
//     greet(){
//         return `Hello, my name is ${this.name}`;
//     },
// };

// console.log(user)


interface TaskCard {
    title: string;
    dueDate: string;
    completedAtDate: string;
    assigneeName: string;
  }

  const taskcard1 : TaskCard = {
    title: "Build the website with static content",
    dueDate: "10th April",
    completedAtDate: "",
    assigneeName: "Rohit S",
  }

  const taskcard2 : TaskCard = {
    title: "Build the website with static content",
    dueDate: "10th April",
    completedAtDate: "",
    assigneeName: "Rohit S",
  }

  