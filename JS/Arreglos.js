
function imprimir( arreglo){
    for(let i=0;i<arreglo.length;i++){
        console.log(arreglo[i])
    }
}

imprimir(["Simón", "Natalia", "Nayib", "Diana", "Germán"])

arr = ["Simón", "Natalia", "Nayib", "Diana", "Germán"]

arr.forEach( (element) => {
    console.log(element)
})

const numeros=[1, 2, 3, 4, 5]
console.log(`los elementos a imprimir ${numeros[1]} y ${numeros[3]}`)

let numerosTxt=[ "Primero", "Segundo", "Tercero", "Cuarto"]
numerosTxt.push("Soy el último elemento")
console.log(numerosTxt)

numerosTxt.forEach( (element) => {
    console.log(element)
})

const newArray = ["Quinto", "Sexto"];

for(let i=4;i<6;i++){
    numerosTxt.splice(i,0,newArray[i-4])
}


console.log(numerosTxt)

const ages = [12, 3, 5, 44, 18, 2, 55, 26];
ages.forEach((element)=> {
    if(element>=18)
        console.log(element)
})

