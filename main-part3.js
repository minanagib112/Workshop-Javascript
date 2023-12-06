//Object Methods
document.write("<h1>Object Methods</h1>");
document.write("<h2>1. Object.assign()</h2>");
document.write(
  "<p>The Object.assign(target, source) static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.</p>"
);
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
document.write(
  "target: " + JSON.stringify(target) + "<br>source: " + JSON.stringify(source)
);

document.write("<h2>2. Object.create()</h2>");
document.write(
  "<p>The Object.create(prototype) static method creates a new object, using an existing object as the prototype of the newly created object.</p>"
);
const person = {
  isHuman: false,
  printIntroduction: function () {
    document.write(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = Object.create(person);
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction();

document.write("<h2>3. Object.defineProperties()</h2>");
document.write(
  "<p>The Object.defineProperties(object1.property1) static method defines new or modifies existing properties directly on an object, returning the object.</p>"
);
const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});
document.write(
  `The result of object1.property1 is ${object1.property1} as expected`
);

document.write("<h2>4. Object.entries()</h2>");
document.write(
  "<p>The Object.entries(object) static method returns an array of a given object's own enumerable string-keyed property key-value pairs.</p>"
);
const object2 = {
  a: "somestring ",
  b: 42,
};
for (const [key, value] of Object.entries(object2)) {
  document.write(` Keys and Values are ${key}: <b> ${value} </b>`);
}

document.write("<h2>5. Object.keys()</h2>");
document.write(
  "<p>The Object.keys(object) static method returns an array of a given object's own enumerable string-keyed property names.</p>"
);
const object3 = {
  a: "somestring",
  b: 42,
  c: false,
};
document.write(`The result of Object.keys is ${Object.keys(object3)}`);

document.write("<h2>6. Object.values()</h2>");
document.write(
  "<p>The Object.values(object) static method returns an array of a given object's own enumerable string-keyed property values.</p>"
);
const object4 = {
  a: "somestring",
  b: 42,
  c: false,
};
document.write(`The result of Object.values is ${Object.values(object4)}`);

document.write("<h2>7. Object.hasOwn()</h2>");
document.write(
  "<p>The Object.hasOwn(object, property) static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.</p>"
);
const object5 = {
  prop: "exists",
};
document.write(
  `The result of Object.hasOwn() is True or False ----- ${Object.hasOwn(
    object5,
    "prop"
  )}`
);

document.write("<h2>8. Object.preventExtensions()</h2>");
document.write(
  "<p>The Object.preventExtensions(object) static method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It also prevents the object's prototype from being re-assigned.</p>"
);
const object6 = {};
Object.preventExtensions(object6);
try {
  Object.defineProperty(object6, "property1", {
    value: 42,
  });
} catch (e) {
  document.write(`The result of Object.preventExtensions is ${e}`);
}

document.write("<h2>9. Object.isExtensible()</h2>");
document.write(
  "<p>The Object.isExtensible(object) static method determines if an object is extensible (whether it can have new properties added to it</p>"
);
const object7 = {};
document.write(
  `The result of Object.isExtensible is weither the object is extensible or not (True or False) ----- ${Object.isExtensible(
    object7
  )}`
);

document.write("<h2>10. Object.isFrozen()</h2>");
document.write(
  "<p>The Object.isFrozen() static method determines if an object is frozen.</p>"
);
const object8 = {
  property1: 42,
};
document.write(
  `The result of Object.isFrozen is weither the object is frozen or not (True or False) ----- ${Object.isFrozen(
    object8
  )}`
);

document.write("<h2>Array Methods</h2>");
document.write("<h2>1. Array.prototype.at()</h2>");
document.write(
  "<p>The at(index) method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.</p>"
);
const array1 = [5, 12, 8, 130, 44];
let index = 2;
document.write(`An index of ${index} returns ${array1.at(index)}`);

document.write("<h2>2. Array.prototype.concat()</h2>");
document.write(
  "<p>The concat(array) method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.</p>"
);
const array2 = ["a", "b", "c"];
const array3 = ["d", "e", "f"];
const array4 = array2.concat(array3);
document.write(
  `The result of concat two arrays ${array2} and ${array3} is (${array4})`
);

document.write("<h2>3. Array.prototype.copyWithin()</h2>");
document.write(
  "<p>The copyWithin(target,start,end) method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.</p>"
);
const array5 = ["a", "b", "c", "d", "e"];
document.write(`The result of copyWithin is ${array5.copyWithin(0, 3, 4)}`);

document.write("<h2>4. Array.prototype.every()</h2>");
document.write(
  "<p>The every(callbackFn) method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.</p>"
);
const isBelowThreshold = (currentValue) => currentValue < 40;
const array6 = [1, 30, 39, 29, 10, 13];
document.write(
  `The result of every is true or false as next ----- ${array6.every(
    isBelowThreshold
  )}`
);

document.write("<h2>5. Array.prototype.fill()</h2>");
document.write(
  "<p>The fill(value, start, end) method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.</p>"
);
const array7 = [1, 2, 3, 4];
document.write(`The result of fill is ${array7.fill(0, 1, 3)}`);

document.write("<h2>6. Array.prototype.filter()</h2>");
document.write(
  "<p>The filter(callbackFn) method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.</p>"
);
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
document.write(`The result of filter is ${result}`);

document.write("<h2> 7. Array.from()</h2>");
document.write(
  "<p>The Array.from(arrayLike) static method creates a new, shallow-copied Array instance from an iterable or array-like object.</p>"
);
console.log(Array.from("foo"));
document.write(`The result of Array.from ('foo') is ${Array.from("foo")}`);

document.write("<h2>8. Array.prototype.push()</h2>");
document.write(
  "<p>The push(element) method of Array instances adds the specified elements to the end of an array and returns the new length of the array.</p>"
);
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
document.write(`The result of push is ${count}`);

document.write("<h2>9. Array.prototype.shift()</h2>");
document.write(
  "<p>The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.</p>"
); 
const array8 = [1, 2, 3];
const firstElement = array8.shift();
document.write(`The result of shift is ${array8} and what's deleted is ${firstElement}`);

document.write("<h2>10. Array.prototype.some()</h2>");
document.write(
  "<p>The some(callbackFn) method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.</p>"
); 
const array9 = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
document.write(`The result of some is true or false ----- ${array9.some(even)}`);

function outerFunction() {
    let outerVariable = "Hello"; // This is part of the lexical environment of the nested function
    function innerFunction() {
      let innerVariable = "World"; // This is a local variable of the nested function
      console.log(outerVariable + " " + innerVariable); // This prints "Hello World"
    }
    return innerFunction; // This returns the nested function as a closure
  }
  
  let myFunction = outerFunction(); // This assigns the closure to a variable
  myFunction(); // This invokes the closure and accesses the outerVariable from its lexical environment
  