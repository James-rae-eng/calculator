
function add(array) {
    let output = array.reduce((a, b) => a + b);
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


function operate(array) {
    if (array.includes("/")) {
        let inArray = array.split('/').map(Number);
        document.getElementById("displayAnswer").innerHTML = divide(inArray);
        console.log(inArray);
    }
    else if (array.includes("x")) {
        let inArray = array.split('x').map(Number);
        document.getElementById("displayAnswer").innerHTML = multiply(inArray);
    }
    else if (array.includes("+")) {
        let inArray = array.split('+').map(Number);
        document.getElementById("displayAnswer").innerHTML = add(inArray);
    }
    else if (array.includes("-")) {
        let inArray = array.split('-').map(Number);
        document.getElementById("displayAnswer").innerHTML = subtract(inArray);
    }
    else {
        return array;
    }
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

let equalsBtn = document.getElementById("equalsBtn");
equalsBtn.addEventListener("click", () => {
    let input = document.getElementById('display').value;
    operate(input);
});


  





 


   


