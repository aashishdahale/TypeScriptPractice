let lname : string;
let fname = 'aashish';
lname = "dahale";
let newname = fname.toUpperCase()+" "+lname.toUpperCase();
console.log(newname);

let age:number;
age=25;
age=25.5;

let dob ="25";
let result = parseInt(dob);
console.log(result)

let isValid:boolean =false;
console.log(isValid);

let empList : string[];
empList = ["Aashish","Aashish1","Aashish2","Aashish3"];


let numList : Array<number>;
numList = [1,2,3,4,5];
// let newNum = numList[5];

let results = numList.filter((num)=> num>2);

let num = numList.find((num)=>num ===2);

let emp = empList.find((emp)=>emp === "Aashish3");

let sum = numList.reduce((acc,num) => acc+num);

console.log(results);
console.log(num);
console.log(emp);
console.log(sum);


const enum Color{
    Red,
    Green,
    Blue
}

let c : Color = Color.Blue;

let swapNumbs : [firstNumber:number,SecondNumber:number];

function swapNumbers(num1:number,num2:number):[number,number]{

    return [num2,num1];
}

swapNumbs = swapNumbers(10,20);

console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
// swapNumbs[2];

let department : any;

department = "IT";
department = 10;

