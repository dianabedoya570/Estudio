// Escribe tu solución acá
const contenedor=document.querySelector(".squares")
const boton=document.querySelector("#append")
boton.addEventListener("click", 
                       function() {
                                let div=document.createElement("div")
                                div.classList.add("square")
                                div.addEventListener("mouseover",()=>{
                                    c.parentNode.removeChild(c)
                                    })
                                contenedor.appendChild(div)

                            })
/*
const cuadro=document.querySelectorAll(".square")
cuadro.forEach((c)=> borrar(c))

function borrar(c){
    c.addEventListener("mouseover",()=>{
        c.parentNode.removeChild(c)
        })
}

/*
const cuadro=document.querySelectorAll(".square")
for(let i=0;i<cuadro.length;i++){
    cuadro[i].addEventListener("mouseover",function(){
        cuadro[i].parentNode.removeChild(cuadro[i])
        })
}*/