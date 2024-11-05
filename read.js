const fs=require('fs');

// const data= fs.readFileSync('input.txt');

// console.log(data.toString());

// console.log("Program Ended"); 

// asynchronous operation

fs.readFile("input.txt", (error, data) => {
    if(error){
        console.error(error);
        return;
    }
    console.log(data.toString());
});


console.log("Program Ended");
console.log("Adaeze is learning Node.js");
