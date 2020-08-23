let name="madhu";
let age=20;
console.log(`NAME:${name} AND AGE IS ${age}`);
/*Redeclaration of variable is not allowed in let
This is the major difference between `LET` and `VAR`
`LET` has the blocks scope but `VAR` has the global scope thrown out the program
*/

let name="prakash"//THIS WILL THROW THE ERROR(SyntaxError: Identifier 'name' has already been declared)


for (let i = 0; i < 10; i++) {
    console.log(`INSIDE THE FOR LOOP:${i}`);
}

console.log(`OUTSIDE THE FOR LOOP:${i}`);//i is not accessible outside the for loop and will throw the error(ReferenceError: i is not defined)