function greetings (nombre, apellido){
    //return 'Mi nombre es ' + nombre +' y mi apellido es '+apellido
    return `Mi nombre es ${nombre} y mi apellido es ${apellido}`
}

console.log(greetings("Nayib", "Abdalá"));
console.log(greetings("Germán", "Escobar"));
console.log(greetings("Simón", "Hoyos"));
 
function sum(operador1, operador2){
    return operador1+operador2
}
console.log(sum(10, 20));  // 30
console.log(sum(10, 10));  // 20
console.log(sum(40, 60));  // 100
console.log(sum(50, 200));

function sayMyName(name) {
    return function lastname(lastname) {
        return `Mi nombre es ${name} y mi apellido es ${lastname}`
    }
}


let name = "Nayib"
console.log(sayMyName(name)("yo"))

