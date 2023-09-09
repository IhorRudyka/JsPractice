// 1. Exercise

let firstName = "Jhon";
let lastName = "Cramel";
let fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Exercise

let length = 12;
let height = 23;

let rectangleArea = length * height;
console.log(`The area of ​​a rectangle = ${rectangleArea}sm!`)

// 3. Exercise

console.log(10**6);

// 4. Exercise

console.log("The random number is: " + Math.floor(Math.random() * 50));

// 5. Exercise

let number = "";

if(number < 0){
    console.log("negative value")
} else if(number > 0) {
    console.log("positive value")
} else if (number === 0) {
    console.log("This is null")
} else {
    console.log("Thit isn`t a number")
}

// 6. Exercise

let text = "Orange";
if(text.length > 1) {
    console.log(text.slice(text.length-2, text.length-1))
}

// 7. Exercise

let month;

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;  
    case 6:
        console.log("June");
        break; 
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;  
    case 12:
        console.log("December");
        break;
    default:
        console.log("There are only 12 month in a Year!!!")
}


// 8. Exercise

let password = "w^&wefwf";

if(password.length > 5 && password.indexOf("&") >= 0) {
    console.log("This password is strong");
} else {
    console.log("Try to make something better(");
}

// 9. Exercise

let a = 5;
let b = 5;

if(typeof a == "number" && typeof b == "number") {
    console.log(a+b);
} else {
    console.log("Sum of those items can’t be counted");
}

// 10. Exercise

let textOne = "1234";
let textTwo = "123";

if(typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length) {
    console.log("those items are strings and they’re equal");
} else {
    console.log("items are not compareble");
}
