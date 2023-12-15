function normal_function(){
    console.log("normal function");
}
normal_function();
function normal_function_paramter(name){
    console.log(`my name is ${name}`);
}
normal_function_paramter('normal_function');
// arrow function & explicit arrow function
var arrow_function=(name)=>{
    console.log(`my name is ${name}`);
};
arrow_function('explicit_arrow_function');
var arrow_function=name=>{
    console.log(`my name is ${name}`);
};
arrow_function('implicit_arrow_function');

// another example of implicit and explicit 
var addOne=(num1,num2)=>{
    return num1+num2;
}
console.log(addOne(2,5));
var addTwo=(num1,num2)=>console.log(addTwo(num1+num2));