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