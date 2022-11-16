// 1. Inserta 4 items más con el texto 3, 4, 5 y 6 respectivamente dentro del contenedor.
const contenedor=document.querySelector(".container")
for(let i=3; i<=7;i++){
    let cuadro=document.createElement("div")
    cuadro.classList.add("item")
    cuadro.innerHTML=`${i}`
    contenedor.appendChild(cuadro)
}
// 2. Agrégales a todos los items la clase error
const cuadros=document.querySelectorAll(".item")
cuadros.forEach(element=>element.classList.add("error"))

// 3. Agrégale el texto "2" al círculo
const circulo=document.querySelector(".circle")
circulo.innerHTML="2"

// 4. Elimina el párrafo
 const parrafo=document.querySelector("p")
 parrafo.parentNode.removeChild(parrafo)