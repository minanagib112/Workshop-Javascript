// Ask the user for the number of values
var numberOfValues = parseInt(
  prompt("Enter the number of values you want to sum up:")
);

//  Initialize an array to store the entered values
var values = [];

// Loop to get user input and save it in the array
for (let i = 0; i < numberOfValues; i++) {
  var inputValue = Number(prompt(`Enter Value ${i + 1}`));
  values.push(inputValue);
}
//  Loop to get the sum of the array
var sum = 0;
for (var i = 0; i < values.length; i++) {
  sum += values[i];
}
alert(`Sum of the entered values: ${sum}`);

// Calculate the average
let average = sum / numberOfValues;
alert(`Average of the entered values: ${average}`);

//Asking user to add or search in phonebook
var operator = prompt(
  "Enter an operator 'add' for adding a new contact or 'search' for searching in the phonebook"
);
//Making an array of objects to save data
const phonebook = [];
//Constructing search function
function search() {
  while (operator.toLocaleLowerCase().trim() == "search") {
    let name = prompt("Enter Contact Name");
    for (let i = 0; i < phonebook.length; i++) {
      if (phonebook[i].Name == name.toLocaleLowerCase().trim()) {
        alert(JSON.stringify(phonebook[i]));
        operator = prompt(
          "Enter an operator 'add' for adding a new contact or 'search' for searching in the phonebook"
        );
      }
    }
  }
}
//Making a loop responsible to keep the process alive
while (operator.toLocaleLowerCase().trim() == "add") {
  let name = prompt("Enter Contact Name");
  let num = prompt("Enter Phone Number");
  var obj = {
    Name: name.toLocaleLowerCase().trim(),
    Phone: num.toLocaleLowerCase().trim(),
  };
  phonebook.push(obj);
  operator = prompt(
    "Enter an operator 'add' for adding a new contact or 'search' for searching in the phonebook"
  );
}
search();

// Loop for choosing each shape type
for (let i = 0; i < 6; i++) {
  var shapeName = prompt(
    "Enter shape name : (circle, square, triangle, rectangle, parallelogram, ellipse) : "
  );
  // if statements for calculating area of each shape
  if (shapeName == "circle") {
    let radius = prompt("Enter radius (cm) : ");
    let pi = 3.14;
    let area = pi * radius * radius;
    alert(`Area of circle is ${area} cm^2 `);  
  } else if (shapeName == "square") {
    let side = prompt("Enter side (cm) : ");
    let area = side * side;
    alert(`Area of square is ${area} cm^2 `);  
  } else if (shapeName == "triangle") {
    let base = prompt("Enter base : (cm) ");
    let height = prompt("Enter height (cm) : ");
    let area = 0.5 * base * height;
    alert(`Area of triangle is ${area} cm^2 `);  
  } else if (shapeName == "rectangle") {
    let length = prompt("Enter length (cm) : ");
    let width = prompt("Enter width (cm) : ");
    let area = length * width;
    alert(`Area of rectangle is ${area} cm^2 `);  
  } else if (shapeName == "parallelogram") {
    let base = prompt("Enter base (cm) : ");
    let height = prompt("Enter height (cm) : ");
    let area = base * height;
    alert(`Area of parallelogram is ${area} cm^2 `);  
  } else if (shapeName == "trapezium") {
    let base1 = prompt("Enter base1 (cm) : ");
    let base2 = prompt("Enter base2 (cm) : ");
    let height = prompt("Enter height (cm) : ");
    let area = 0.5 * (base1 + base2) * height;
    alert(`Area of trapezium is ${area} cm^2 `);  
  } else if (shapeName == "ellipse") {
    let radius1 = prompt("Enter radius1 (cm) : ");
    let radius2 = prompt("Enter radius2 (cm) : ");
    let pi = 3.14;
    let area = pi * radius1 * radius2;
    alert(`Area of ellipse is ${area} cm^2 `);  
  }
}
