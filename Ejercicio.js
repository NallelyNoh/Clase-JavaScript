//
const closureEmails = (a) => {
    return (b) => b + a;
};

closureGmail = closureEmails('@gmail.com');

console.log(closureGmail('marco'));


// const gmail = `@gmail.com;
// marco${gmail}`;


//////////////////////////////Ternarios
const ternary = (x) => {
  return x >= 6 ? "pasa" : "no pasa";
}

console.log(ternary(5));


////////////////////////////
const array = [0,1,2,3,4,5];

array.map((x) => Math.sqrt(x));
console.log(array)

let array2 = array.map((x) => Math.sqrt(x));
console.log(array2);


///////////////////
const valideateFalsy = (x) => {
    return !x ? "falsy" : "truthly"
}