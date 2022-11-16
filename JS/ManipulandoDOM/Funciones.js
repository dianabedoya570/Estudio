// 1. Inserta 4 items más con el texto 3, 4, 5 y 6 respectivamente dentro del contenedor.
const contenedor=document.querySelector(".container") //const boton=document.querySelector(".item")
for(let i=3;i<8;i++) {
let p= document.createElement("div")
p.classList.add("item")
p.innerHTML=`${i}`
contenedor.appendChild(p)
}
// 2. Agrégales a todos los items la clase error
const items=document.querySelectorAll(".item")
items.forEach(element=>element.classList.add("error"))
// 3. Agrégale el texto "2" al círculo
const dos= document.querySelector(".circle")
dos.innerHTML='2'
// 4. Elimina el párrafo
