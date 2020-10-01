console.log('hello world');

let name = 'atharva';
console.log(name);

// cannot bbe a reserved keyboard
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen (-)
// are case sensetive

let firstName = 'atharva';
let lastName = 'raut';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let person = {
    name: 'athrva', //string literal
    age: 30, // number literal 
    isApproved: false // boolean literal
};

// dot notation
person.name = 'atharva';

//bracket notation
let selection = 'name';
person['selection'] = 'mary';
console.log(person.name);

let selectedColors = ['red', 'blue', '1'];
selectedColors[2] = 1;
console.log(selectedColors.length);


//performing a task
function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}

greet('john', 'smith');
greet('mary');

//calculating a value 
function square(number) {
    return number * number;
}


console.log(square(2)); 