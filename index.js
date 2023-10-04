//Code your solutions in this file

//1
const fiveToOneHundred = ()=> {
    for(i = 5; i <= 100; i++){
        console.log(i); 
    }
}
fiveToOneHundred(); 

//2 
const multiplesOfThree = ()=> {
    for(i = 3; i <= 100; i++){
        if (i % 3 ===0){
            console.log(i); 
        }
    }
}
multiplesOfThree(); 

//3 
const multiplesOfThreeOrFive = ()=> {
    for(i = 1; i <= 100; i++){
        if (i % 3 === 0 || i % 5 === 0){
            console.log(i); 
        }
    }
}
multiplesOfThreeOrFive(); 

//4 
const untilNum = (int) => {
    for (i = 1; i <= int; i++) {
        console.log(i);
    }
}
untilNum(10);

//5 
const multiply = (int1, int2) => {
    return int1 * int2; 
}
console.log(multiply(2, 4))
console.log(multiply(10, -5))
console.log(multiply(3, 7.5))

//6
const add = (num1,num2) => {
    return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
}
console.log(add(2, 4));
console.log(add(10, -5));
console.log(add(3, 7.5));  
console.log(add(5, 5)); 

//7
const isNegative = (num) => {
    return num * -1 > 0 ? true : false; 
}
console.log(isNegative(3))         //returns false
console.log(isNegative(-2))        //returns true
console.log(isNegative(Math.PI))   //returns false