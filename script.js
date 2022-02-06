
function add(array) {
    let inNumber = array.map(Number);
    let output = inNumber.reduce((a, b) => a + b);
    return output;}

function subtract(array) {
    let output = array.reduce((a, b) => a - b);
    return output;}

function divide(array) {
    let output = array.reduce((a, b) => a / b);
    return output;}

function multiply(array) {
    let output = array.reduce((a, b) => a * b);
    return output;}

function getIndex(index) {
    if (index > -1) {
        array.splice(index, 1);
    }       
    return index -1;
}

let array;

function operate(arrayInput) {
    array = arrayInput;

    while (array.length > 1) {
        if (array[1] === "/") {
            let index = array.indexOf("/");
            let newIndex = getIndex(index);
            let newArray = divide(array.slice(newIndex,2));
            array.splice(newIndex, 2, newArray);
        }
        else if (array[1] === "x") {
            let index = array.indexOf("x");
            let newIndex = getIndex(index);
            let newArray = multiply(array.slice(newIndex,2));
            array.splice(newIndex, 2, newArray);
        }
        else if (array[1] === "+") {
            let index = array.indexOf("+");
            let newIndex = getIndex(index);
            let newArray = add(array.slice(newIndex,2));
            array.splice(0, 2, newArray);
        }
        else if (array[1] === "-") {
            let index = array.indexOf("-");
            let newIndex = getIndex(index);
            let newArray = subtract(array.slice(newIndex,2));
            array.splice(0, 2, newArray);
        }
        else {
            return array;
        }
    }
    
    let numAnswer = array[0];
    endAnswer = +numAnswer.toFixed(3);
    document.getElementById("displayAnswer").innerHTML = endAnswer;
}



document.querySelector('#numbers').addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
      let value = target.innerHTML
      document.querySelector('#display').value += value
    }
  });

document.querySelector('#operators').addEventListener('click', event => {
let target = event.target;
if (target.matches('button')) {
    let value = target.innerHTML
    document.querySelector('#display').value += value
}
});

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    document.querySelector('#display').value = "";
    document.getElementById("displayAnswer").innerHTML = "";
});

let backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", () => {
    let input = document.getElementById('display').value;
    document.querySelector('#display').value = input.substr(0, input.length -1);
});

function equals() {
    let input = document.getElementById('display').value;
    let outputArray = input.match(/\d+\.\d+|\d+|[^0-9]/g);
    if (outputArray.includes(".",".")) {
        document.getElementById("displayAnswer").innerHTML = "Too many decimals";
    }
    else {
        operate(outputArray);
    }
}

let equalsBtn = document.getElementById("equalsBtn");
equalsBtn.addEventListener("click", () => {
    equals();
});

document.querySelector('#display').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      equals();
    }
});


  





 


   


