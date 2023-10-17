const accountId = 144553
let accountEmail = "golu@google.com"
var accountPassword = "12345"
accountCity = "patna"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
/*


1. Task 1 - `let` vs. `const`:
let x = 5;
const y = 10;
x = 7;
y = 15; // What happens here?


2. Task 2 - Block Scope:

if (true) {
  var a = 5;
  let b = 10;
}
console.log(a); // What is the value of 'a'?
console.log(b); // What happens here?


3. Task 3 - Redeclaring Variables:
var name = "Alice";
let age = 30;
const name = "Bob";
age = 35; // What happens with these variable declarations and assignments?
```

4. Task 4 - Hoisting:

console.log(x); // What happens if you try to log 'x' here using 'var' and 'let'?
var x = 5;
let y = 10;
```

5. Task 5 - Temporal Dead Zone (TDZ):
console.log(a); // What happens if you try to log 'a' here?
let a = 15;
```

6. Task 6 - Function Scope:
function example() {
  if (true) {
    var innerVar = "Inside function";
    let innerLet = "Inside function";
  }
  console.log(innerVar); // What is the value of 'innerVar' here?
  console.log(innerLet); // What happens with 'innerLet' here?
}
example();
```
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])