/*let yearOfBirth = 1990; // declaration
let currentYear = 2023; // declaration
currentYear++; // statement 
console.log(`I am ${currentYear - yearOfBirth} years old`);
const roundedValue = Math.round(10.3)
console.log(`10.3 rounds off to ${roundedValue}`);
console.log("Hello There")*/


/*let length = 2;
let width = 5;
let area = length * width;
let perimeter = 2*(length+width);
console.log(`Area:${area}`) //this prints area
console.log(`Perimeter:${perimeter}`); //this prints perimeter

let newlength = 10;
let newwidth = 6;
let newarea = newlength*newwidth;
let newperimeter = 2*(newlength+newwidth);
console.log(`updated area: ${newarea}`);
console.log(`updated perimeter: ${newperimeter}`); */

/*we have to rename each variable for the code to work properly and use let rather than
const to update it*/


/*let length = 2;
let width = 5;
let area = length * width;
let perimeter = 2 * (length + width);

console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);

// Update values
length = 10;
width = 6;
area = length * width;
perimeter = 2 * (length + width);

console.log(`Updated Area: ${area}`);
console.log(`Updated Perimeter: ${perimeter}`);*/


/* different approach, keeps same variables and changes values, useful when you don't 
need to compare with old values and are happy 
for them to  be overwritten by new values*/


/*Scope-work */
const decimalNumber = 0.5;

function convertToPercentage() {
const percentage = `${decimalNumber * 100}%`;
return(percentage)
}

const result = convertToPercentage();
console.log(result);

/* when we run this it gives error as percentage is defined inside function
local framework) and the console.log(percentage) is in global framework.so the
scope of the percentage variable is in local fw only. therefore we need a return 
statement in body of our function- we store function return value 
in a variable called result and then print result.
In this example our function convertToPercentage is not reusable as  const 
decimalNumber is a variable in global framework so its values cannot be reassigned 
and as decimalNumber is always in the global scope, convertToPercentage 
will always go to the global scope to get the value of decimalNumber..For
this function to be reusable we should as decimalnumber as a parameter in the function
 */
function convertToPercentage(decimalNumber) {
const percentage = `${decimalNumber * 100}%`;
return percentage;
  }
  
  console.log(convertToPercentage(0.5));   
  console.log(convertToPercentage(0.231));
