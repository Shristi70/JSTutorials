function fun() { // function definition
    console.log('Hi!');
    console.log('Hello!');
    console.log('NAmaste!');
}

fun(); // function call


function anotherfunc() {
    fun(); // fun() will be called
}

anotherfunc();

function funcWithPara(val1, val2) { // Takes something, returns nothing
    console.log(val1+val2);
}

funcWithPara(2, 5);

function myfun() {     // Takes nothing, returns something
    console.log('Shristi');
    return 'Hello World';
}

let greeting = myfun(); // function call

console.log(greeting);

function myfun2(val1 , val2) { // Takes something, returns something
    return val1+val2;
}

let value = myfun2(1, 5); 
console.log(value);
