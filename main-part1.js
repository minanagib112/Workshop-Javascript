// // Getting user name and password
let userName = prompt("Enter your username: ");
// Checking user name and password
if (userName == "admin") {
  let password = prompt("Enter your password: ");
  if (password == "421$$") {
    alert("Welcome login success");
  } else {
    alert("Incorrect password, please try again");
  }
} else {
  alert("Incorrect username, please try again");
}

//Getting data for calculations

let number1 = prompt("Enter first number: ");
let operator = prompt("Enter operator: (+ , - , * , /) ");
let number2 = prompt("Enter second number: ");
var result;
if (operator == "+") {
  result = Number(number1) + Number(number2);
} else if (operator == "-") {
  result = Number(number1) - Number(number2);
} else if (operator == "*") {
  result = Number(number1) * Number(number2);
} else if (operator == "/") {
  result = Number(number1) / Number(number2);
}

alert(`Result is ${result}`); //alert(result);
//Bonus for making more calculations
for (let i = 0; i < 3; i++) {
  let operator_2 = prompt("Enter operator: (+ , - , * , /) ");
  let number3 = prompt("Enter another number: ");

  if (operator_2 == "+") {
    result = Number(result) + Number(number3);
  } else if (operator_2 == "-") {
    result = Number(result) - Number(number3);
  } else if (operator_2 == "*") {
    result = Number(result) * Number(number3);
  } else if (operator_2 == "/") {
    result = Number(result) / Number(number3);
  }
  alert(`Result is ${result}`); //alert(result
}
