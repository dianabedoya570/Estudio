/*function cantidad(arreglo){
let cantidad=0;
for(let i=0;i<arreglo.length;i++){
    if(arreglo[i]>=3 && arreglo[i]<=8){
        cantidad++;
    }

}
 return cantidad
}

console.log(cantidad([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))*/
//console.log(objFrecuencia.hasOwnProperty("a"))


function frecuencias( string ){
    let objFrecuencia={}
    let letra
    for(let i=0;i<string.length;i++){
        letra=string[i]
        if(objFrecuencia.hasOwnProperty(letra)){
            objFrecuencia[letra]++
        }else{
            if(letra!==" "){
            objFrecuencia[letra]=1
            }
            
        }
    }
    return objFrecuencia

}

console.log(frecuencias("anita lava la tina"));

