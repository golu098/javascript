var name = "shiv kant";

function normal_function() {
    console.log("successfully logged through normal function");
}

normal_function();

// IIFE
(function iife() {
    console.log("successfully logged through IIFE");
})();

// IIFE with arrow function
((name) => {
    console.log(`arrow function ${name}`);
})(name); // Pass the argument here

// Short note

// ()():-(function definition )(execution call)
// we are using IIFE to protect the function or variable from the global scope
