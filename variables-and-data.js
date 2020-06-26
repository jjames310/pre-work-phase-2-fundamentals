/*
* Variables, Data Types, and Typing
 */
let wordData;

wordData  = "Word Data";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;



let obj= {
    key1: "value 1",
    key2: 3,
    obj2: {
        obj2key1 : "value of inner object",
    }
};

console.log(obj.obj2.obj2key1);

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);


let add = 1 + 2;
let sub = 2 - 1
let mult = 2 * 4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "string 2"
console.log(string);



/*
* Conditions, Functions, and Loops.
 */

// Equals
let equals = equals 1 === 1;
console.log(equals)

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessthan = 2 < 10;

// Greater than Equals
let greaterthanEq = 5 >= 5;

//Less Than Equals
let lessthanEq =4 <= 9:

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;

function compareStorePrices (storeA, storeB) {

}
if (storeAislower)  {
    console.log("Store A has a lower price.")
} else if (storeB < storeA) {
    console.log("Store B has a lower price.")
} else{
    console.log("Their prices are equal.")
}
}

compareStorePrices(10,5);
compareStorePrices(7,10);

function squareNum (number) {
  let squared = number* number;
  return squared
}

let squarednumber = squareNum(10);
console.log(squaredNumber);


let x = 10;

function addNumbers(n, m) {
    console.log(x);
    let b;
    if (1===1)
        b = 8;

    return n + m;
}
//              0  1  2  3  4
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrlen = ourArray.length;
for(i = 0; i<arrLen; i++{
    console.log( i is equal to: " = i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++){
        console.log('j is equal to:  '  + j);
    }

}

let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}

/*
* Objects, Interfaces, and API's
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function (typeOfBark) {
    console.log("Bark!");
    }

    function x(y) {
        y.num = y.num + 5;
        console.log(y);
}

let y = {
        name: "Tom",
        num: 10,
};
    x(y);
    console.log(y);

}