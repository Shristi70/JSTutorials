function addition()// function with no parameter,no return value
{
    let a=2;
    let b=3;
    console.log(a+b);
}
addition();

function add(val1,val2){ // takes something but returns nothing
    console.log(val1+val2);
}

add(2,2);

function sum() { //takes nothing, returns something
    let b =15;
    let c=15;
    console.log(c+b);
    return 'sum of b+c=30'; //for understanding
}

let e = sum();
console.log(e);
    
function plus(a,b)// Takes something ,return something
{
    console.log(a+b);
    return 'plus';
}

plus(25,25);