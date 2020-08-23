var name="madhu";
var age=20;
console.log(`NAME:${name} AND AGE IS ${age}`);
//Redeclaration of variable is  allowed in var

var name="prakash"//THIS WILL TNOT HROW THE ERROR LIKE `LET`

for (var i = 0; i < 10; i++) {
    console.log(`INSIDE THE FOR LOOP:${i}`);
}

console.log(`OUTSIDE THE FOR LOOP:${i}`);//i is accessible outside the for loop