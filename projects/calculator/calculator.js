let equation = [];
let waslastnumber = false;
function add(input) { // Adds a symbol or number to the equation
    if (input == "0" && waslastnumber != true){ // prevents empty 0's.
    }
    else if (!Number.isNaN((parseInt(input)))){ //if is number
        if (waslastnumber){ // if the last input was also a number
            equation[equation.length - 1] += input;
        }
        else { // if the last input wasn't also a number
            equation.push(input);
        }
        waslastnumber = true;
    }
    else{ //if is symbol
        if (waslastnumber){
            equation.push(input);
            waslastnumber = false;
        }
    }
    let noComma=""; // All this does is remove the commas from between the numbers since its array
        for (let i=0;i<equation.length;i++){
            noComma+=equation[i];
    }
    document.getElementById("results").innerHTML = noComma;
}

function clearCalc() { // Clears the calculator
    equation=[];
    document.getElementById("results").innerHTML = equation;
    waslastnumber = false;
}

function printAnswer() { // Prints the calculated answer
    let tempEquation = equation.slice();
    for (let i=0;i<tempEquation.length;i++){
        if (tempEquation[i] == "×"){
            tempEquation[i] = parseFloat(tempEquation[i-1])*parseFloat(tempEquation[i+1]);
            tempEquation.splice(i-1,1);
            tempEquation.splice(i,1);
            i--;
        }
        if (tempEquation[i] == "÷"){
            tempEquation[i] = parseFloat(tempEquation[i-1])/parseFloat(tempEquation[i+1]);
            tempEquation.splice(i-1,1);
            tempEquation.splice(i,1);
            i--;
        }
    }
    for (let i=0;i<tempEquation.length;i++){
        if (tempEquation[i] == "+"){
            tempEquation[i] = parseFloat(tempEquation[i-1])+parseFloat(tempEquation[i+1]);
            tempEquation.splice(i-1,1);
            tempEquation.splice(i,1);
            i--;
        }
        if (tempEquation[i] == "−"){
            tempEquation[i] = parseFloat(tempEquation[i-1])-parseFloat(tempEquation[i+1]);
            tempEquation.splice(i-1,1);
            tempEquation.splice(i,1);
            i--;
        }
    }
    document.getElementById("results").innerHTML = tempEquation;
    equation = [tempEquation]
}
function copyAnswer() { // Prints the calculated answer
    let tempEquation = equation.slice();
    for (let i=0;i<tempEquation.length;i++){
        if (tempEquation[i] == "×"){
            tempEquation[i] = parseFloat(tempEquation[i-1])*parseFloat(tempEquation[i+1]);
            tempEquation.splice(i-1,1);
            tempEquation.splice(i,1);
            i--;
        }
        if (tempEquation[i] == "÷"){
            tempEquation[i] = parseFloat(tempEquation[i-1])/parseFloat(tempEquation[i+1]);
            tempEquation.splice(i-1,1);
            tempEquation.splice(i,1);
            i--;
        }
    }
    for (let i=0;i<tempEquation.length;i++){
        if (tempEquation[i] == "+"){
            tempEquation[i] = parseFloat(tempEquation[i-1])+parseFloat(tempEquation[i+1]);
            tempEquation.splice(i-1,1);
            tempEquation.splice(i,1);
            i--;
        }
        if (tempEquation[i] == "−"){
            tempEquation[i] = parseFloat(tempEquation[i-1])-parseFloat(tempEquation[i+1]);
            tempEquation.splice(i-1,1);
            tempEquation.splice(i,1);
            i--;
        }
    }
    navigator.clipboard.writeText(tempEquation);
    equation = [tempEquation]
}


// To-Do: credit this awesome blog that helped me alot somewhere in the website
//https://blog.darrien.dev/posts/writing-calc-parser/