let cadena="Mi primer programa js"
console.log(cadena)
cadena='Mi primer programa js'
console.log(cadena)
console.log("Mi "+"primer "+"programa "+"js ")
console.log( 3!==3)

let nombre= "Juan"
let edad=25
let pais="Perú"
console.log( nombre + ' tiene '+edad+' años, y vive en '+pais)

console.log(!(3<2)&&(46<50))

////**************************************Condicionales**************************/

const numero=12
if (numero<10){
    console.log("menor")
}else{
    console.log("mayor")

}

/***operador ternario********************************************************* */

const time=19

 time<12?console.log("Buenos dias"):(time < 18? console.log("Buenas tardes"):console.log("Buenas noches"))