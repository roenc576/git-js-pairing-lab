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

//8 
const triangleArea = (height,base) => {
    return .5 * height * base;
}
console.log(triangleArea(5,7));

//9
const betweenTwentyAndFourty = (num) => {
    return num >= 20 && num <= 40 ? true : false; 
}
console.log(betweenTwentyAndFourty(4))      //return false
console.log(betweenTwentyAndFourty(21))    //return true
console.log(betweenTwentyAndFourty(99))     //return true
console.log(betweenTwentyAndFourty(101))    //return false

//10
const largest = (num1,num2,num3) => {
    if (num1 > num2 && num1 > num3){
        return num1
    } else if (num2 > num3 && num2 > num1){
        return num2
    } else (num3 > num1 && num3 > num2)
        return num3
}
console.log(largest(4,6,8));
console.log(largest(30,22,17));